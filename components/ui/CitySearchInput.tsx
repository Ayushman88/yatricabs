"use client";

import { useState, useEffect, useRef } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import styles from "./CitySearchInput.module.css";

interface CitySearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}


const CitySearchInput = ({
  value,
  onChange,
  placeholder = "Enter city",
  className,
}: CitySearchInputProps) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    const fetchCities = async () => {
      if (!debouncedValue || debouncedValue.length < 1) {
        setSuggestions([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(
          `/api/cities?q=${encodeURIComponent(debouncedValue)}`
        );
        const data: { city: string; state: string }[] = await response.json();
        
        const cities = data.map((item) => `${item.city}, ${item.state}`);

        setSuggestions(cities);
        setShowSuggestions(true);
      } catch (error) {
        console.error("Error fetching cities:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Only fetch if the user is typing (we assume if value matches debounced, it might be a type)
    // But we need to avoid fetching if the user just selected an item.
    // A simple way is to check if the current value is exactly one of the suggestions? 
    // No, that's hard. 
    // We'll just fetch. If the user selected "Delhi", fetching "Delhi" again is fine, it will return Delhi.
    fetchCities();
  }, [debouncedValue]);

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleSelect = (city: string) => {
    onChange(city);
    setShowSuggestions(false);
    setSuggestions([]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    // If user clears input, hide suggestions
    if (e.target.value.length === 0) {
      setShowSuggestions(false);
    }
  };

  return (
    <div className={styles.container} ref={wrapperRef}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`${styles.input} ${className || ""}`}
        onFocus={() => {
            if (suggestions.length > 0) setShowSuggestions(true);
        }}
      />
      {showSuggestions && (suggestions.length > 0 || isLoading) && (
        <div className={styles.suggestionsList}>
          {isLoading && <div className={styles.loading}>Loading...</div>}
          {!isLoading &&
            suggestions.map((city, index) => (
              <div
                key={index}
                className={styles.suggestionItem}
                onClick={() => handleSelect(city)}
              >
                {city}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default CitySearchInput;

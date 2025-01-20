```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval.  The interval ID is not stored and cleaned up properly.
    setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); 
  }, []);

  return <div>Count: {count}</div>;
}
```
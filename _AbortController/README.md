### ✅ What is `AbortController`?

`AbortController` is a built-in JavaScript class used to **abort ongoing asynchronous operations**, especially useful for canceling **fetch requests**, `setTimeout`, or any async task that supports aborting.

---

### 🧠 Why Use `AbortController`?

* To **cancel long or unnecessary network requests** (e.g., when the user navigates away from a page).
* To **avoid race conditions** (e.g., if multiple fetches are triggered rapidly).
* To **save resources** (bandwidth, memory, performance).
* To **prevent memory leaks** in components that unmount before the async task finishes (especially in React).

---

### ✅ Basic Syntax:

```js
const controller = new AbortController();
const signal = controller.signal;

fetch('https://example.com/data', { signal })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => {
    if (err.name === 'AbortError') {
      console.log('Fetch aborted');
    } else {
      console.error('Fetch error:', err);
    }
  });

// Abort the fetch request
controller.abort();
```

---

### ✅ Practical Example: Cancel fetch if user navigates away

```js
function fetchData() {
  const controller = new AbortController();

  fetch('https://api.example.com/products', { signal: controller.signal })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
      if (err.name === 'AbortError') {
        console.log('Request was cancelled');
      } else {
        console.error(err);
      }
    });

  // Cancel the fetch after 3 seconds
  setTimeout(() => controller.abort(), 3000);
}
```

---

### ✅ React Example (with cleanup):

```tsx
import { useEffect } from 'react';

function ProductComponent() {
  useEffect(() => {
    const controller = new AbortController();

    fetch('https://api.example.com/products', {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        }
      });

    // Cleanup: abort on component unmount
    return () => {
      controller.abort();
    };
  }, []);

  return <div>Loading...</div>;
}
```

---

### 🧵 Summary:

| Feature             | Explanation                                              |
| ------------------- | -------------------------------------------------------- |
| **AbortController** | Creates a controller to abort async operations           |
| **signal**          | Passed into async tasks like `fetch()`                   |
| **abort()**         | Cancels the ongoing operation                            |
| **use case**        | Fetch cancel, timeout control, component unmount cleanup |

Let me know if you want a custom `useFetch` hook with `AbortController`.

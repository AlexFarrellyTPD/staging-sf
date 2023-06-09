/**
 * Time-specific greeting message.
 *
 * @param {string} name Optional name
 * @returns {string} Time-based greeting
 */
const useGreeting = (name) => {
  const now = new Date();
  const hour = now.getHours();

  let greeting = "Good Evening";
  if (hour < 18) greeting = "Good Afternoon";
  if (hour < 12) greeting = "Good Morning";

  return name ? `${greeting}, ${name}` : greeting;
};

export default useGreeting;

const postLightActivate = async (port, numbersString) => {
  return fetch(`http://${port}/toggle_lights?numbers=${numbersString}`)
    .then((response) => {
      if (response.ok) {
        console.log("Light toggled successfully");
      } else {
        console.error("Error toggling light:", response.statusText);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export { postLightActivate };

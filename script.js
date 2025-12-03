function volume_sphere() {
    // Get the radius value as a number
    let radius = parseFloat(document.getElementById("radius").value);

    // Validate: must be a non-negative number
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = "NaN";
        return false;
    }

    // Calculate volume
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display rounded to 4 decimal places
    document.getElementById("volume").value = volume.toFixed(4);

    return false; // Prevent form submission
}

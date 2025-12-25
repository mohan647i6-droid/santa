 // Create stars in the night sky
for (let i = 0; i < 60; i++) {
    let star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.animationDuration = (Math.random() * 2 + 1) + "s";
    document.body.appendChild(star);
}
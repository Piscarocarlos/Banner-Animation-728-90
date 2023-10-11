let anim = bodymovin.loadAnimation({
    container: document.getElementById('animation-maya'), // Required
    path: 'animation/data.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
})
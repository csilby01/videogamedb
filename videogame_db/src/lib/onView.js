function whenInView(node, { onEnter }) {
    const observer = new IntersectionObserver((entries) => {
        console.log('Observation', entries);
        entries.forEach(entry => {
            if (entry.isIntersecting){
                console.log('Element is intersecting: ', node);
                onEnter();
            }
        });
    }, { threshold: 0.1 });

    observer.observe(node);
    return () => observer.disconnect();
}
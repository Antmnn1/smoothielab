/* scroll morbido */
const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


/* apparizione graduale */
gsap.registerPlugin(ScrollTrigger)

gsap.utils.toArray('body *').forEach((el, i) => {

    const section = el.closest('section')

    gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.1,
        scrollTrigger: {
            trigger: section || el,
            start: 'top bottom',
            once: true
        }
    })
})
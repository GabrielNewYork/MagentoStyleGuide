import throttle from 'lodash/throttle'
import ResizeObserver from 'resize-observer-polyfill'

export default {
    props: {
        defaultBreakpoint: {
            type: String,
            default: 'default'
        },
        breakpoints: {
            type: Object,
            default: () => ({})
        },
        strategy: {
            type: String,
            default: 'mobile-first',
            validator: value => value === 'mobile-first' || value === 'desktop-first'
        },
        dimension: {
            type: String,
            default: 'width',
            validator: value => value === 'width' || value === 'height'
        },
        throttle: {
            type: Number,
            default: 200
        },
        tag: {
            type: [String, Object, null],
            default: 'div'
        }
    },
    data: vm => ({
        size: 0,
        observedElement: null,
        observer: vm.$isServer
            ? null
            : new ResizeObserver(
                throttle(entries => {
                    vm.size = entries[0].contentRect[vm.dimension]
                }, vm.throttle)
            )
    }),
    computed: {
        isMobileFirst: vm => vm.strategy === 'mobile-first',
        api() {
            return {
                is: {
                    exactly: this.exactly,
                    largerThan: this.gt,
                    smallerThan: this.lt,
                    atLeast: this.gte,
                    atMost: this.lte
                },
                breakpoint: this.currentBreakpoint,
                defaultBreakpoint: this.defaultBreakpoint,
                breakpoints: this.breakpoints,
                strategy: this.strategy,
                larger: this.largerBreakpoints,
                smaller: this.smallerBreakpoints,
                size: this.size
            }
        },
// The provided breakpoints object as iterable breakpoints array
// e.g. { a: 100, b: 200, c: 300 } => [{ name: 'a', size: 100 }, { name: 'b', size: 200 }, { name: 'c', size: 300 }]
        iterableBreakpoints() {
            return Object.entries(this.breakpoints).map(([name, size]) => ({
                name,
                size
            }))
        },
        iterableBreakpointsWithDefault() {
            if (this.isMobileFirst) {
                return [
                    {
                        name: this.defaultBreakpoint
                    },
                    ...this.iterableBreakpoints
                ]
            } else {
                return [
                    ...this.iterableBreakpoints,
                    {
                        name: this.defaultBreakpoint
                    }
                ]
            }
        },
// The iterable breakpoints array, sorted by size
        sizeSortedBreakpoints() {
            return this.iterableBreakpoints
                .slice(0)
                .sort(({size: aSize}, {size: bSize}) => aSize - bSize)
        },
// The iterable breakpoints array, sorted by size depending on the strategy (ascending for desktop-first, descending for mobile-first)
        strategicSizeSortedBreakpoints() {
            return this.isMobileFirst
                ? this.sizeSortedBreakpoints.slice(0).reverse()
                : this.sizeSortedBreakpoints.slice(0)
        },
        currentBreakpoint() {
            for (const {name, size} of this.strategicSizeSortedBreakpoints) {
                if (this.isMobileFirst) {
                    if (this.size >= size) return name
                } else {
                    if (this.size <= size) return name
                }
            }

            return this.defaultBreakpoint
        },
// Names of breakpoints smaller than the current breakpoint
        smallerBreakpoints() {
            if (this.currentBreakpoint === this.defaultBreakpoint) {
                if (this.isMobileFirst) {
                    return []
                } else {
                    return this.sizeSortedBreakpoints.map(({name}) => name)
                }
            }

            const defaultBreakpointContainer = []
            if (this.isMobileFirst) {
                defaultBreakpointContainer.push(this.defaultBreakpoint)
            }

            return defaultBreakpointContainer.concat(
                this.sizeSortedBreakpoints
                    .slice(
                        0,
                        this.sizeSortedBreakpoints.findIndex(
                            ({name}) => name === this.currentBreakpoint
                        )
                    )
                    .map(({name}) => name)
            )
        },
// Names of breakpoints larger than the current breakpoint
        largerBreakpoints() {
            if (this.currentBreakpoint === this.defaultBreakpoint) {
                if (this.isMobileFirst) {
                    return this.sizeSortedBreakpoints.map(({name}) => name)
                } else {
                    return []
                }
            }

            const defaultBreakpointContainer = []
            if (!this.isMobileFirst) {
                defaultBreakpointContainer.push(this.defaultBreakpoint)
            }

            return this.sizeSortedBreakpoints
                .slice(
                    this.sizeSortedBreakpoints.findIndex(
                        ({name}) => name === this.currentBreakpoint
                    ) + 1
                )
                .map(({name}) => name)
                .concat(defaultBreakpointContainer)
        },
        exactly() {
            return this.iterableBreakpointsWithDefault.reduce(
                (carry, {name}) => ({
                    ...carry,
                    [name]: name === this.currentBreakpoint
                }),
                {}
            )
        },
        gt() {
            return this.iterableBreakpointsWithDefault.reduce(
                (carry, {name}) => ({
                    ...carry,
                    [name]: this.smallerBreakpoints.includes(name)
                }),
                {}
            )
        },
        gte() {
            return {
                ...this.gt,
                [this.currentBreakpoint]: true
            }
        },
        lt() {
            return this.iterableBreakpointsWithDefault.reduce(
                (carry, {name}) => ({
                    ...carry,
                    [name]: this.largerBreakpoints.includes(name)
                }),
                {}
            )
        },
        lte() {
            return {
                ...this.lt,
                [this.currentBreakpoint]: true
            }
        }
    },
    render(h) {
        const slot = this.$scopedSlots.default(this.api)
        if (this.tag === null) {
            return slot
        } else {
            return h(this.tag, [slot])
        }
    },
    watch: {
        dimension() {
            this.observe(true)
        }
    },
    mounted() {
        this.observe()
    },
    updated() {
        this.observe()
    },
    destroyed() {
        this.observer.disconnect()
    },
    methods: {
        observe(forceDisconnect = false) {
            if (forceDisconnect || this.observedElement !== this.$el) {
                if (forceDisconnect) {
// Disconnect observer completely
                    this.observer.disconnect()
                } else if (this.observedElement) {
// Disconnect observed element
                    this.observer.unobserve(this.observedElement)
                    this.observedElement = null
                }

// Connect observer
                if (this.$el instanceof Element) {
                    this.observedElement = this.$el
                    this.observer.observe(this.$el)
                }
            }
        }
    }
}

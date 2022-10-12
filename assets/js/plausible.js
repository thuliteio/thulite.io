import Plausible from 'plausible-tracker'

const { trackPageview } = Plausible({
  domain: 'gethyas.com',
})

trackPageview()

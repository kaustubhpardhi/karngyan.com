import Plausible from 'plausible-tracker';
const PlausiblePlugin = (context, inject) => {
    const optionsDomain = 'template.karngyan.com';
    const optionsHashMode = '';
    const optionsTrackLocalhost = 'false';
    const optionsApiHost = 'https://analytics.lookatx.dev';
    const options = {
        domain: optionsDomain.length ? optionsDomain : null,
        hashMode: optionsHashMode === 'true',
        trackLocalhost: optionsTrackLocalhost === 'true',
        apiHost: optionsApiHost.length ? optionsApiHost : 'https://plausible.io'
    };
    const plausible = Plausible(options);
    plausible.enableAutoPageviews();
    inject('plausible', plausible);
};
export default PlausiblePlugin;

var cartodb = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'});

// Map
var map = L.map('map', {
    center: [0.0, -0.0033194271393881536],
    zoom: 2,
    minZoom: 0,
    maxZoom: 9,
    layers: [ cartodb ]
});

// Colorbar
L.Control.ColorBar = L.Control.extend({
    onAdd: function(map) {
        var img = L.DomUtil.create('img');
        img.src = '/static/images/colorbarno2.png';
        img.width = '1644';
        img.height = '262';
        img.style = 'width: 50%; height: auto';
        return img;
    },
    onRemove: function(map) {
        // Nothing to do here
    }
});
L.control.colorbar = function(opts) {
    return new L.Control.ColorBar(opts);
}
L.control.colorbar({ position: 'bottomleft' }).addTo(map);

// Title
var title = L.control();
title.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'mapctl maptitle');
    this.update();
    return this._div;
};
title.update = function(props) {
    this._div.innerHTML = "Modelo Troposferico Sentinel-5P ";
};
title.setdate = function(date) {
    this._div.innerHTML = "Modelo Troposferico Sentinel-5P : " + date;
}
title.addTo(map);


// Overlay layers (TMS)
var l3layers = [

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20180430-20180514/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20180507-20180521/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20180514-20180528/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20180521-20180604/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20180528-20180611/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20180604-20180618/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20180611-20180625/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20180618-20180702/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20180625-20180709/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20180702-20180716/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20180709-20180723/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20180716-20180730/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20180723-20180806/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20180730-20180813/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20180806-20180820/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20180813-20180827/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20180820-20180903/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20180827-20180910/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20180903-20180917/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20180910-20180924/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20180917-20181001/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20180924-20181008/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20181001-20181015/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20181008-20181022/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20181015-20181029/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20181022-20181105/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20181029-20181112/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20181105-20181119/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20181112-20181126/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20181119-20181203/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20181126-20181210/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20181203-20181217/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20181217-20181231/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20181224-20190107/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20181231-20190114/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190107-20190121/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190114-20190128/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190121-20190204/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190128-20190211/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190204-20190218/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190211-20190225/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190218-20190304/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190225-20190311/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190304-20190318/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190311-20190325/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190318-20190401/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190325-20190408/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190401-20190415/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190408-20190422/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190415-20190429/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190422-20190506/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190429-20190513/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190506-20190520/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190513-20190527/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190520-20190603/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190527-20190610/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190603-20190617/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190610-20190624/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190617-20190701/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190624-20190708/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190701-20190715/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190708-20190722/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190715-20190729/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190722-20190805/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190729-20190812/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190805-20190819/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190812-20190826/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190819-20190902/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190826-20190909/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190902-20190916/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190909-20190923/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190916-20190930/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190923-20191007/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20190930-20191014/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20191007-20191021/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20191014-20191028/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20191021-20191104/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20191028-20191111/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20191104-20191118/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20191111-20191125/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20191118-20191202/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20191125-20191209/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20191202-20191216/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20191209-20191223/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20191216-20191230/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20191223-20200106/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20191230-20200113/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20200106-20200120/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20200113-20200127/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20200120-20200203/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20200127-20200210/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20200203-20200217/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20200210-20200224/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20200217-20200302/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20200224-20200309/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20200302-20200316/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20200309-20200323/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20200316-20200330/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20200323-20200406/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20200330-20200413/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20200406-20200420/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20200413-20200427/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20200420-20200504/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20200427-20200511/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20200504-20200518/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/fortnight/20200511-20200525/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

  L.tileLayer('https://obs.eu-de.otc.t-systems.com/s5p-pal-l3-tms/s5p-l3-tropno2/custom/20200517-20200531/{z}/{x}/{y}.png',
              {tms: true, opacity: 0.7, maxNativeZoom: 6, maxZoom: 9, attribution: '<a href="https://scihub.copernicus.eu/twiki/pub/SciHubWebPortal/TermsConditions/TC_Sentinel_Data_31072014.pdf">Sentinel data</a>, <a href="http://maps.s5p-pal.com/">S5P-PAL</a>'}),

];
var l3timereferences = [

  ["30-04-2018 - 14-05-2018", "30 Apr - 14 May 2018"],

  ["07-05-2018 - 21-05-2018", "7 - 21 May 2018"],

  ["14-05-2018 - 28-05-2018", "14 - 28 May 2018"],

  ["21-05-2018 - 04-06-2018", "21 May - 4 Jun 2018"],

  ["28-05-2018 - 11-06-2018", "28 May - 11 Jun 2018"],

  ["04-06-2018 - 18-06-2018", "4 - 18 Jun 2018"],

  ["11-06-2018 - 25-06-2018", "11 - 25 Jun 2018"],

  ["18-06-2018 - 02-07-2018", "18 Jun - 2 Jul 2018"],

  ["25-06-2018 - 09-07-2018", "25 Jun - 9 Jul 2018"],

  ["02-07-2018 - 16-07-2018", "2 - 16 Jul 2018"],

  ["09-07-2018 - 23-07-2018", "9 - 23 Jul 2018"],

  ["16-07-2018 - 30-07-2018", "16 - 30 Jul 2018"],

  ["23-07-2018 - 06-08-2018", "23 Jul - 6 Aug 2018"],

  ["30-07-2018 - 13-08-2018", "30 Jul - 13 Aug 2018"],

  ["06-08-2018 - 20-08-2018", "6 - 20 Aug 2018"],

  ["13-08-2018 - 27-08-2018", "13 - 27 Aug 2018"],

  ["20-08-2018 - 03-09-2018", "20 Aug - 3 Sep 2018"],

  ["27-08-2018 - 10-09-2018", "27 Aug - 10 Sep 2018"],

  ["03-09-2018 - 17-09-2018", "3 - 17 Sep 2018"],

  ["10-09-2018 - 24-09-2018", "10 - 24 Sep 2018"],

  ["17-09-2018 - 01-10-2018", "17 Sep - 1 Oct 2018"],

  ["24-09-2018 - 08-10-2018", "24 Sep - 8 Oct 2018"],

  ["01-10-2018 - 15-10-2018", "1 - 15 Oct 2018"],

  ["08-10-2018 - 22-10-2018", "8 - 22 Oct 2018"],

  ["15-10-2018 - 29-10-2018", "15 - 29 Oct 2018"],

  ["22-10-2018 - 05-11-2018", "22 Oct - 5 Nov 2018"],

  ["29-10-2018 - 12-11-2018", "29 Oct - 12 Nov 2018"],

  ["05-11-2018 - 19-11-2018", "5 - 19 Nov 2018"],

  ["12-11-2018 - 26-11-2018", "12 - 26 Nov 2018"],

  ["19-11-2018 - 03-12-2018", "19 Nov - 3 Dec 2018"],

  ["26-11-2018 - 10-12-2018", "26 Nov - 10 Dec 2018"],

  ["03-12-2018 - 17-12-2018", "3 - 17 Dec 2018"],

  ["17-12-2018 - 31-12-2018", "17 - 31 Dec 2018"],

  ["24-12-2018 - 07-01-2019", "24 Dec 2018 - 7 Jan 2019"],

  ["31-12-2018 - 14-01-2019", "31 Dec 2018 - 14 Jan 2019"],

  ["07-01-2019 - 21-01-2019", "7 - 21 Jan 2019"],

  ["14-01-2019 - 28-01-2019", "14 - 28 Jan 2019"],

  ["21-01-2019 - 04-02-2019", "21 Jan - 4 Feb 2019"],

  ["28-01-2019 - 11-02-2019", "28 Jan - 11 Feb 2019"],

  ["04-02-2019 - 18-02-2019", "4 - 18 Feb 2019"],

  ["11-02-2019 - 25-02-2019", "11 - 25 Feb 2019"],

  ["18-02-2019 - 04-03-2019", "18 Feb - 4 Mar 2019"],

  ["25-02-2019 - 11-03-2019", "25 Feb - 11 Mar 2019"],

  ["04-03-2019 - 18-03-2019", "4 - 18 Mar 2019"],

  ["11-03-2019 - 25-03-2019", "11 - 25 Mar 2019"],

  ["18-03-2019 - 01-04-2019", "18 Mar - 1 Apr 2019"],

  ["25-03-2019 - 08-04-2019", "25 Mar - 8 Apr 2019"],

  ["01-04-2019 - 15-04-2019", "1 - 15 Apr 2019"],

  ["08-04-2019 - 22-04-2019", "8 - 22 Apr 2019"],

  ["15-04-2019 - 29-04-2019", "15 - 29 Apr 2019"],

  ["22-04-2019 - 06-05-2019", "22 Apr - 6 May 2019"],

  ["29-04-2019 - 13-05-2019", "29 Apr - 13 May 2019"],

  ["06-05-2019 - 20-05-2019", "6 - 20 May 2019"],

  ["13-05-2019 - 27-05-2019", "13 - 27 May 2019"],

  ["20-05-2019 - 03-06-2019", "20 May - 3 Jun 2019"],

  ["27-05-2019 - 10-06-2019", "27 May - 10 Jun 2019"],

  ["03-06-2019 - 17-06-2019", "3 - 17 Jun 2019"],

  ["10-06-2019 - 24-06-2019", "10 - 24 Jun 2019"],

  ["17-06-2019 - 01-07-2019", "17 Jun - 1 Jul 2019"],

  ["24-06-2019 - 08-07-2019", "24 Jun - 8 Jul 2019"],

  ["01-07-2019 - 15-07-2019", "1 - 15 Jul 2019"],

  ["08-07-2019 - 22-07-2019", "8 - 22 Jul 2019"],

  ["15-07-2019 - 29-07-2019", "15 - 29 Jul 2019"],

  ["22-07-2019 - 05-08-2019", "22 Jul - 5 Aug 2019"],

  ["29-07-2019 - 12-08-2019", "29 Jul - 12 Aug 2019"],

  ["05-08-2019 - 19-08-2019", "5 - 19 Aug 2019"],

  ["12-08-2019 - 26-08-2019", "12 - 26 Aug 2019"],

  ["19-08-2019 - 02-09-2019", "19 Aug - 2 Sep 2019"],

  ["26-08-2019 - 09-09-2019", "26 Aug - 9 Sep 2019"],

  ["02-09-2019 - 16-09-2019", "2 - 16 Sep 2019"],

  ["09-09-2019 - 23-09-2019", "9 - 23 Sep 2019"],

  ["16-09-2019 - 30-09-2019", "16 - 30 Sep 2019"],

  ["23-09-2019 - 07-10-2019", "23 Sep - 7 Oct 2019"],

  ["30-09-2019 - 14-10-2019", "30 Sep - 14 Oct 2019"],

  ["07-10-2019 - 21-10-2019", "7 - 21 Oct 2019"],

  ["14-10-2019 - 28-10-2019", "14 - 28 Oct 2019"],

  ["21-10-2019 - 04-11-2019", "21 Oct - 4 Nov 2019"],

  ["28-10-2019 - 11-11-2019", "28 Oct - 11 Nov 2019"],

  ["04-11-2019 - 18-11-2019", "4 - 18 Nov 2019"],

  ["11-11-2019 - 25-11-2019", "11 - 25 Nov 2019"],

  ["18-11-2019 - 02-12-2019", "18 Nov - 2 Dec 2019"],

  ["25-11-2019 - 09-12-2019", "25 Nov - 9 Dec 2019"],

  ["02-12-2019 - 16-12-2019", "2 - 16 Dec 2019"],

  ["09-12-2019 - 23-12-2019", "9 - 23 Dec 2019"],

  ["16-12-2019 - 30-12-2019", "16 - 30 Dec 2019"],

  ["23-12-2019 - 06-01-2020", "23 Dec 2019 - 6 Jan 2020"],

  ["30-12-2019 - 13-01-2020", "30 Dec 2019 - 13 Jan 2020"],

  ["06-01-2020 - 20-01-2020", "6 - 20 Jan 2020"],

  ["13-01-2020 - 27-01-2020", "13 - 27 Jan 2020"],

  ["20-01-2020 - 03-02-2020", "20 Jan - 3 Feb 2020"],

  ["27-01-2020 - 10-02-2020", "27 Jan - 10 Feb 2020"],

  ["03-02-2020 - 17-02-2020", "3 - 17 Feb 2020"],

  ["10-02-2020 - 24-02-2020", "10 - 24 Feb 2020"],

  ["17-02-2020 - 02-03-2020", "17 Feb - 2 Mar 2020"],

  ["24-02-2020 - 09-03-2020", "24 Feb - 9 Mar 2020"],

  ["02-03-2020 - 16-03-2020", "2 - 16 Mar 2020"],

  ["09-03-2020 - 23-03-2020", "9 - 23 Mar 2020"],

  ["16-03-2020 - 30-03-2020", "16 - 30 Mar 2020"],

  ["23-03-2020 - 06-04-2020", "23 Mar - 6 Apr 2020"],

  ["30-03-2020 - 13-04-2020", "30 Mar - 13 Apr 2020"],

  ["06-04-2020 - 20-04-2020", "6 - 20 Apr 2020"],

  ["13-04-2020 - 27-04-2020", "13 - 27 Apr 2020"],

  ["20-04-2020 - 04-05-2020", "20 Apr - 4 May 2020"],

  ["27-04-2020 - 11-05-2020", "27 Apr - 11 May 2020"],

  ["04-05-2020 - 18-05-2020", "4 - 18 May 2020"],

  ["11-05-2020 - 25-05-2020", "11 - 25 May 2020"],

  ["17-05-2020 - 31-05-2020", "17 - 31 May 2020"],

]

if (l3layers.length > 0)
{
  index = l3layers.length - 1;
  l3layers[index].addTo(map)
  title.setdate(l3timereferences[index][1])
  document.getElementById('timeref').innerHTML = l3timereferences[index][0]
  document.getElementById('nav-right-button').disabled = true
  if (index == 0) document.getElementById('nav-right-button').disabled = true
}

gotoPrevLayer = function() {
  if (l3layers.length > 0)
  {
     if (index == 0) return
     l3layers[index].remove()
     if (index == l3layers.length -1) document.getElementById('nav-right-button').disabled = false
     index -= 1;
     l3layers[index].addTo(map)
     title.setdate(l3timereferences[index][1])
     document.getElementById('timeref').innerHTML = l3timereferences[index][0]
     if (index == 0) document.getElementById('nav-left-button').disabled = true
  }
}

gotoNextLayer = function() {
  if (l3layers.length > 0)
  {
     if (index == l3layers.length - 1) return
     if (index == 0) document.getElementById('nav-left-button').disabled = false
     l3layers[index].remove()
     index += 1;
     l3layers[index].addTo(map)
     title.setdate(l3timereferences[index][1])
     document.getElementById('timeref').innerHTML = l3timereferences[index][0]
     if (index == l3layers.length -1) document.getElementById('nav-right-button').disabled = true
  }
}

// Use Europe as default view (SW and NE points with (lat, lon))



/*const vista = function (lat, long){
    map.setView([lat, long],3);
}
console.log(vista)*/


$('#CHINA').click(function vista(lat, long) {//selecciono el id:ciudades para que me ejecute la siguiente funcion

    const latLong = document.getElementById('CHINA').value;   
    console.log(latLong.indexOf('115'));
    if(latLong.indexOf('115') === 3){

        let long = 115;
        let lat = 34;
        map.setView([lat, long],2.5);
    }   
  

}); 


$('#AMERICA').click(function vista(lat, long) {//selecciono el id:ciudades para que me ejecute la siguiente funcion

    const latLong = document.getElementById('AMERICA').value;   
    console.log(latLong.indexOf('-74'));
    if(latLong.indexOf('-74') === 2){

        let long = -100;
        let lat = 30;
        map.setView([lat, long],2.5);
    }   
  

}); 
$('#EUROPA').click(function vista(lat, long) {//selecciono el id:ciudades para que me ejecute la siguiente funcion

    const latLong = document.getElementById('EUROPA').value;   
    console.log(latLong.indexOf('17'));
    if(latLong.indexOf('17') === 3){

        let long = 17;
        let lat = 52;
        map.setView([lat, long],3);
    }   

}); 

map.setView([34, 115],3);

/*document.getElementById("toggle-info").addEventListener("click", function() {
    var content = document.getElementById('toggle-content');
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });*/

  

var wms_layers = [];

var lyr_STOrtofotocolor2023_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_2023",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: '[ST] Ortofoto color [2023]',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_STOrtofotocolor2023_0, 0]);
var format_parkingscdq_1 = new ol.format.GeoJSON();
var features_parkingscdq_1 = format_parkingscdq_1.readFeatures(json_parkingscdq_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parkingscdq_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parkingscdq_1.addFeatures(features_parkingscdq_1);
var lyr_parkingscdq_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parkingscdq_1, 
                style: style_parkingscdq_1,
                popuplayertitle: 'parkingscdq',
                interactive: true,
                title: '<img src="styles/legend/parkingscdq_1.png" /> parkingscdq'
            });
var format_localnorai_2 = new ol.format.GeoJSON();
var features_localnorai_2 = format_localnorai_2.readFeatures(json_localnorai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_localnorai_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_localnorai_2.addFeatures(features_localnorai_2);
var lyr_localnorai_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_localnorai_2, 
                style: style_localnorai_2,
                popuplayertitle: 'localnorai',
                interactive: true,
                title: '<img src="styles/legend/localnorai_2.png" /> localnorai'
            });
var format_allotjamnetsbo_3 = new ol.format.GeoJSON();
var features_allotjamnetsbo_3 = format_allotjamnetsbo_3.readFeatures(json_allotjamnetsbo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_allotjamnetsbo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_allotjamnetsbo_3.addFeatures(features_allotjamnetsbo_3);
var lyr_allotjamnetsbo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_allotjamnetsbo_3, 
                style: style_allotjamnetsbo_3,
                popuplayertitle: 'allotjamnetsbo',
                interactive: true,
                title: '<img src="styles/legend/allotjamnetsbo_3.png" /> allotjamnetsbo'
            });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_STOrtofotocolor2023_0,lyr_parkingscdq_1,lyr_localnorai_2,lyr_allotjamnetsbo_3,],
                                fold: "open",
                                title: 'Mapas de fondo'});

lyr_STOrtofotocolor2023_0.setVisible(true);lyr_parkingscdq_1.setVisible(true);lyr_localnorai_2.setVisible(true);lyr_allotjamnetsbo_3.setVisible(true);
var layersList = [group_Mapasdefondo];
lyr_parkingscdq_1.set('fieldAliases', {'id': 'id', });
lyr_localnorai_2.set('fieldAliases', {'id': 'id', });
lyr_allotjamnetsbo_3.set('fieldAliases', {'id': 'id', });
lyr_parkingscdq_1.set('fieldImages', {'id': 'TextEdit', });
lyr_localnorai_2.set('fieldImages', {'id': 'TextEdit', });
lyr_allotjamnetsbo_3.set('fieldImages', {'id': 'TextEdit', });
lyr_parkingscdq_1.set('fieldLabels', {'id': 'no label', });
lyr_localnorai_2.set('fieldLabels', {'id': 'no label', });
lyr_allotjamnetsbo_3.set('fieldLabels', {'id': 'no label', });
lyr_allotjamnetsbo_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
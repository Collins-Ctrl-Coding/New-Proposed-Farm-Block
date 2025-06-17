var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid ',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Luapula_Prov_Districts_1 = new ol.format.GeoJSON();
var features_Luapula_Prov_Districts_1 = format_Luapula_Prov_Districts_1.readFeatures(json_Luapula_Prov_Districts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Luapula_Prov_Districts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Luapula_Prov_Districts_1.addFeatures(features_Luapula_Prov_Districts_1);
var lyr_Luapula_Prov_Districts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Luapula_Prov_Districts_1, 
                style: style_Luapula_Prov_Districts_1,
                popuplayertitle: 'Luapula_Prov_Districts',
                interactive: true,
                title: '<img src="styles/legend/Luapula_Prov_Districts_1.png" /> Luapula_Prov_Districts'
            });
var format_ProposedLufubuFarmBlock_2 = new ol.format.GeoJSON();
var features_ProposedLufubuFarmBlock_2 = format_ProposedLufubuFarmBlock_2.readFeatures(json_ProposedLufubuFarmBlock_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProposedLufubuFarmBlock_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProposedLufubuFarmBlock_2.addFeatures(features_ProposedLufubuFarmBlock_2);
var lyr_ProposedLufubuFarmBlock_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProposedLufubuFarmBlock_2, 
                style: style_ProposedLufubuFarmBlock_2,
                popuplayertitle: 'Proposed Lufubu Farm Block',
                interactive: true,
                title: '<img src="styles/legend/ProposedLufubuFarmBlock_2.png" /> Proposed Lufubu Farm Block'
            });
var format_ProposedLupendeFarmBlock_3 = new ol.format.GeoJSON();
var features_ProposedLupendeFarmBlock_3 = format_ProposedLupendeFarmBlock_3.readFeatures(json_ProposedLupendeFarmBlock_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProposedLupendeFarmBlock_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProposedLupendeFarmBlock_3.addFeatures(features_ProposedLupendeFarmBlock_3);
var lyr_ProposedLupendeFarmBlock_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProposedLupendeFarmBlock_3, 
                style: style_ProposedLupendeFarmBlock_3,
                popuplayertitle: 'Proposed Lupende Farm Block',
                interactive: true,
                title: '<img src="styles/legend/ProposedLupendeFarmBlock_3.png" /> Proposed Lupende Farm Block'
            });
var format_ProposedLwelaFarmBlockADD_4 = new ol.format.GeoJSON();
var features_ProposedLwelaFarmBlockADD_4 = format_ProposedLwelaFarmBlockADD_4.readFeatures(json_ProposedLwelaFarmBlockADD_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProposedLwelaFarmBlockADD_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProposedLwelaFarmBlockADD_4.addFeatures(features_ProposedLwelaFarmBlockADD_4);
var lyr_ProposedLwelaFarmBlockADD_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProposedLwelaFarmBlockADD_4, 
                style: style_ProposedLwelaFarmBlockADD_4,
                popuplayertitle: 'Proposed Lwela Farm Block ADD',
                interactive: true,
                title: '<img src="styles/legend/ProposedLwelaFarmBlockADD_4.png" /> Proposed Lwela Farm Block ADD'
            });
var format_ProposedMantapalaFarmBlock_5 = new ol.format.GeoJSON();
var features_ProposedMantapalaFarmBlock_5 = format_ProposedMantapalaFarmBlock_5.readFeatures(json_ProposedMantapalaFarmBlock_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProposedMantapalaFarmBlock_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProposedMantapalaFarmBlock_5.addFeatures(features_ProposedMantapalaFarmBlock_5);
var lyr_ProposedMantapalaFarmBlock_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProposedMantapalaFarmBlock_5, 
                style: style_ProposedMantapalaFarmBlock_5,
                popuplayertitle: 'Proposed Mantapala Farm Block',
                interactive: true,
                title: '<img src="styles/legend/ProposedMantapalaFarmBlock_5.png" /> Proposed Mantapala Farm Block'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Luapula_Prov_Districts_1.setVisible(true);lyr_ProposedLufubuFarmBlock_2.setVisible(true);lyr_ProposedLupendeFarmBlock_3.setVisible(true);lyr_ProposedLwelaFarmBlockADD_4.setVisible(true);lyr_ProposedMantapalaFarmBlock_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Luapula_Prov_Districts_1,lyr_ProposedLufubuFarmBlock_2,lyr_ProposedLupendeFarmBlock_3,lyr_ProposedLwelaFarmBlockADD_4,lyr_ProposedMantapalaFarmBlock_5];
lyr_Luapula_Prov_Districts_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FEATURE_TY': 'FEATURE_TY', 'PROVINCE': 'PROVINCE', 'Area_km': 'Area_km', 'PROV_CODE': 'PROV_CODE', 'DIST_CODE': 'DIST_CODE', 'DISTRICT': 'DISTRICT', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_ProposedLufubuFarmBlock_2.set('fieldAliases', {'id': 'id', 'Size': 'Size', 'Area': 'Area', 'Name': 'Name', });
lyr_ProposedLupendeFarmBlock_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Area': 'Area', });
lyr_ProposedLwelaFarmBlockADD_4.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Name': 'Name', });
lyr_ProposedMantapalaFarmBlock_5.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Name': 'Name', });
lyr_Luapula_Prov_Districts_1.set('fieldImages', {'OBJECTID': 'Range', 'FEATURE_TY': 'TextEdit', 'PROVINCE': 'TextEdit', 'Area_km': 'TextEdit', 'PROV_CODE': 'Range', 'DIST_CODE': 'Range', 'DISTRICT': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_ProposedLufubuFarmBlock_2.set('fieldImages', {'id': '', 'Size': '', 'Area': '', 'Name': '', });
lyr_ProposedLupendeFarmBlock_3.set('fieldImages', {'id': '', 'Name': '', 'Area': '', });
lyr_ProposedLwelaFarmBlockADD_4.set('fieldImages', {'id': '', 'Area': '', 'Name': '', });
lyr_ProposedMantapalaFarmBlock_5.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Name': 'TextEdit', });
lyr_Luapula_Prov_Districts_1.set('fieldLabels', {'OBJECTID': 'no label', 'FEATURE_TY': 'no label', 'PROVINCE': 'no label', 'Area_km': 'no label', 'PROV_CODE': 'no label', 'DIST_CODE': 'no label', 'DISTRICT': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_ProposedLufubuFarmBlock_2.set('fieldLabels', {'id': 'no label', 'Size': 'no label', 'Area': 'no label', 'Name': 'header label - always visible', });
lyr_ProposedLupendeFarmBlock_3.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Area': 'header label - always visible', });
lyr_ProposedLwelaFarmBlockADD_4.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Name': 'header label - always visible', });
lyr_ProposedMantapalaFarmBlock_5.set('fieldLabels', {'id': 'no label', 'Area': 'no label', 'Name': 'header label - always visible', });
lyr_ProposedMantapalaFarmBlock_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
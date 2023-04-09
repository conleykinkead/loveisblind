
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "mapbox_0": {
            "type": "raster",
            "tiles": ["https://api.mapbox.com/styles/v1/conleykinkead/clg2l4vua001301qo6qej7suz/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY29ubGV5a2lua2VhZCIsImEiOiJjbGF3dW5mZWgwamU5M3VxdXV5Mng1OWlzIn0.O_JC8MpPC2Vezlcv_qFCMw"],
            "tileSize": 256
        },
        "beeline_s1_1": {
            "type": "geojson",
            "data": json_beeline_s1_1
        }
                    ,
        "beeline_s1_honeymoonapartments_2": {
            "type": "geojson",
            "data": json_beeline_s1_honeymoonapartments_2
        }
                    ,
        "beeline_s1_apartmentswedding_3": {
            "type": "geojson",
            "data": json_beeline_s1_apartmentswedding_3
        }
                    ,
        "beeline_s1_podshoneymoon_4": {
            "type": "geojson",
            "data": json_beeline_s1_podshoneymoon_4
        }
                    ,
        "beeline_s2_5": {
            "type": "geojson",
            "data": json_beeline_s2_5
        }
                    ,
        "beeline_s3_6": {
            "type": "geojson",
            "data": json_beeline_s3_6
        }
                    ,
        "beeline_s4_7": {
            "type": "geojson",
            "data": json_beeline_s4_7
        }
                    ,
        "LIB_s1_8": {
            "type": "geojson",
            "data": json_LIB_s1_8
        }
                    ,
        "LIB_s2_9": {
            "type": "geojson",
            "data": json_LIB_s2_9
        }
                    ,
        "LIB_s3_10": {
            "type": "geojson",
            "data": json_LIB_s3_10
        }
                    ,
        "LIB_s4_11": {
            "type": "geojson",
            "data": json_LIB_s4_11
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_mapbox_0_0",
            "type": "raster",
            "source": "mapbox_0"
        },
        {
            "id": "lyr_beeline_s1_1_0",
            "type": "line",
            "source": "beeline_s1_1",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#85b66f'}
        }
,
        {
            "id": "lyr_beeline_s1_honeymoonapartments_2_0",
            "type": "line",
            "source": "beeline_s1_honeymoonapartments_2",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#7d8b8f'}
        }
,
        {
            "id": "lyr_beeline_s1_apartmentswedding_3_0",
            "type": "line",
            "source": "beeline_s1_apartmentswedding_3",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#91522d'}
        }
,
        {
            "id": "lyr_beeline_s1_podshoneymoon_4_0",
            "type": "line",
            "source": "beeline_s1_podshoneymoon_4",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#beb297'}
        }
,
        {
            "id": "lyr_beeline_s2_5_0",
            "type": "line",
            "source": "beeline_s2_5",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#c43c39'}
        }
,
        {
            "id": "lyr_beeline_s3_6_0",
            "type": "line",
            "source": "beeline_s3_6",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#e5b636'}
        }
,
        {
            "id": "lyr_beeline_s4_7_0",
            "type": "line",
            "source": "beeline_s4_7",
            "layout": {},
            "paint": {'line-width': 0.9285714285714285, 'line-opacity': 1.0, 'line-color': '#e15989'}
        }
,
        {
            "id": "lyr_LIB_s1_8_0",
            "type": "circle",
            "source": "LIB_s1_8",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#becf50', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_LIB_s2_9_0",
            "type": "circle",
            "source": "LIB_s2_9",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#987db7', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_LIB_s3_10_0",
            "type": "circle",
            "source": "LIB_s3_10",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e77148', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_LIB_s4_11_0",
            "type": "circle",
            "source": "LIB_s4_11",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#b7484b', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}
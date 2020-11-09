
window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';

    let places = staticLoadPlaces();
    renderPlaces(places);
    
    let places1 = staticLoadPlaces1();
    renderPlaces(places1);
    
    let places2 = staticLoadPlaces2();
    renderPlaces(places2);
    
    let places3 = staticLoadPlaces3();
    renderPlaces(places3);
    
     let places4 = staticLoadPlaces4();
    renderPlaces(places4);
    
};

function staticLoadPlaces4() {
    return [
        {
            name: '5',
            location: {
                // decomment the following and add coordinates:
                 lat: 4.669565,
                 lng: -74.083953,
                 
            },
        },
    ];
}

function staticLoadPlaces3() {
    return [
        {
            name: '4',
            location: {
                // decomment the following and add coordinates:
                 lat: 4.651095,
                 lng: -74.106538,
                 
            },
        },
    ];
}


function staticLoadPlaces2() {
    return [
        {
            name: '3',
            location: {
                // decomment the following and add coordinates:
                 lat: 4.688685,
                 lng: -74.035016,
                 
            },
        },
    ];
}


function staticLoadPlaces1() {
    return [
        {
            name: '2',
            location: {
                // decomment the following and add coordinates:
                 lat: 4.695330,
                 lng: -74.083163,
                 
            },
        },
    ];
}

function staticLoadPlaces() {
    return [
        {
            name: '1',
            location: {
                // decomment the following and add coordinates:
                 //lat: 4.695330,
                 //lng: -74.083163,
                 //lat: 10.695330,
                 //lng: -77.083163,
                 
                 lat: 10.1850864,
                lng: -73.5872378,
            },
        },
    ];
}

var models = [
    { url: './assets/scene.gltf',
        scale: '0.5 0.5 0.5',
        info: 'claro audifonos',
        rotation: '0 180 0',
        
    },
    {
        url: './assets/scenev.gltf',
        scale: '0.5 0.5 0.5',
        rotation: '0 180 0',
        info: 'claro video',
    },
    {
        url: './assets/scene20.gltf',
        scale: '0.5 0.5 0.5',
        rotation: '0 180 0',
        info: 'claro s20',
    },
];




var modelIndex = 0;
var setModel = function (model, entity) {
    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    if (model.rotation) {
        entity.setAttribute('rotation', model.rotation);
    }

    if (model.position) {
        entity.setAttribute('position', model.position);
    }

    entity.setAttribute('gltf-model', model.url);

    const div = document.querySelector('.instructions');
    div.innerText = model.info;
};

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

        setModel(models[modelIndex], model);

        model.setAttribute('animation-mixer', '');

        document.querySelector('button[data-action="change"]').addEventListener('click', function () {
            var entity = document.querySelector('[gps-entity-place]');
            modelIndex++;
            var newIndex = modelIndex % models.length;
            setModel(models[newIndex], entity);
        });

        scene.appendChild(model);
    });
}

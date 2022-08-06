const flightBookingForm = document.getElementById('flight-booking-form');
const flightTab = document.getElementById('flight-tab');

const hotelBookingForm = document.getElementById('hotel-booking-form');
const hotelTab = document.getElementById('hotel-tab');

const busBookingForm = document.getElementById('bus-booking-form');
const busTab = document.getElementById('bus-tab');

const oneWay = document.getElementById('oneWay');
const roundTrip = document.getElementById('roundTrip');
const multiTrip = document.getElementById('multiTrip');

const flightsToDate = document.getElementById("flightsToDate");
const lcc = document.getElementById('lcc');
const gdc = document.getElementById('gdc')
const flightBookingMulti = document.getElementById("flight-booking-multi");
const flightBookingOneTwo = document.getElementById("flight-booking-one-two");

flightTab.addEventListener('click', function () {
    flightBookingForm.classList.remove('hidden');
    hotelBookingForm.classList.add('hidden');
    busBookingForm.classList.add('hidden');
})

hotelTab.addEventListener('click', function () {
    flightBookingForm.classList.add('hidden');
    hotelBookingForm.classList.remove('hidden');
    busBookingForm.classList.add('hidden');
})


busTab.addEventListener('click', function () {
    flightBookingForm.classList.add('hidden');
    hotelBookingForm.classList.add('hidden');
    busBookingForm.classList.remove('hidden');
})

oneWay.addEventListener('click', function () {
    flightsToDate.classList.add('hidden');
    lcc.classList.add('hidden');
    gdc.classList.add('hidden');
    flightBookingMulti.classList.add('hidden');
    flightBookingOneTwo.classList.remove('hidden');
})

roundTrip.addEventListener('click', function () {
    flightsToDate.classList.remove('hidden');
    lcc.classList.remove('hidden');
    gdc.classList.remove('hidden');
    flightBookingMulti.classList.add('hidden');
    flightBookingOneTwo.classList.remove('hidden');
})

multiTrip.addEventListener('click', function () {
    flightBookingOneTwo.classList.add('hidden');
    flightBookingMulti.classList.remove('hidden');
})

const addMoreFields = document.querySelector('#add-more-fields');
const moreOptionsCrossButton = document.querySelector('.more-options-cross-button');
const moreOptionsContainer = document.querySelector('.more-options-container');

addMoreFields.addEventListener('click', function (e) {
    e.preventDefault();
    const moreOptionField = document.createElement('div');
    moreOptionField.innerHTML = `
    <div>
        <div class="bookings-flex-box">
            <input id="multiFlightDepartFrom2" class="form-control my-2 me-2 text-xsm" type="search" placeholder="Depart From"
        aria-label="Search">
            <input id="multiFlightGoingTo2" class="form-control my-2 me-2 text-xsm" type="search" placeholder="Going To" aria-label="Search">
            <div class="input-group date my-2 me-2" id="multiDatePickerFrom">
                <input type="date" class="form-control text-xsm" id="multiFlightsToDate" />
            </div>
            <span class="more-options-cross-button"><i class="fa-solid fs-4 fa-xmark"></i></span>
        </div>
    </div>`
    moreOptionsContainer.appendChild(moreOptionField);

    const close = document.querySelectorAll('.more-options-cross-button');
    for(let i=0; i<close.length; i++){
        close[i].addEventListener('click', function() {
            close[i].parentElement.parentElement.classList.add('hidden');
        })
    }
})
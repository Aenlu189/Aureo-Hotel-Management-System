const rooms = [
    "B101", "B102", "B103", "B104", "B105", "B106", "B107", "B108", "B109", "B110",
    "B201", "B202", "B203", "B204", "B205", "B206", "B207", "B208", "B209", "B210",
    "B301", "B302", "B303", "B304", "B305", "B306", "B307", "B308", "B309", "B310",
    "B401", "B402", "B403", "B404", "B405", "B406", "B407", "B408", "B409", "B410",
    "B501", "B502", "B503", "B504", "B505", "B506", "B507", "B508", "B509", "B510",
    "B601", "B602", "B603", "B604", "B605", "B606", "B607", "B608", "B609", "B610"

];

function updateRoomStatus(roomID, status) {
    const roomButton = document.getElementById(roomID);
    if (roomButton) {
        roomButton.classList.remove("available", "occupied", "maintenance", "cleaning");

        if (status === "available") {
            roomButton.classList.add("available");
        } else if (status === "occupied") {
            roomButton.classList.add("occupied");
        } else if (status === "maintenance") {
            roomButton.classList.add("maintenance");
        } else if (status === "cleaning") {
            roomButton.classList.add("cleaning");
        }
    }
}

rooms.forEach(room => {
    updateRoomStatus(room, "available");
});

const content = document.getElementById('content');

document.getElementById('dashboard-link').addEventListener('click', () => {
    content.innerHTML = `<div class="container dashboard-container">
        
                <!-- Floor 1 -->
                <div class="floor-section">
                    <h3>Floor 1</h3>
                    <div class="d-flex flex-wrap">
                        <button id="B101" class="room-button available">101</button>
                        <button id="B102" class="room-button available">102</button>
                        <button id="B103" class="room-button available">103</button>
                        <button id="B104" class="room-button available">104</button>
                        <button id="B105" class="room-button available">105</button>
                        <button id="B106" class="room-button available">106</button>
                        <button id="B107" class="room-button available">107</button>
                        <button id="B108" class="room-button available">108</button>
                        <button id="B109" class="room-button available">109</button>
                        <button id="B110" class="room-button available">110</button>
                        
                    </div>
                </div>

                <!-- Floor 2 -->
                <div class="floor-section">
                    <h3>Floor 2</h3>
                    <div class="d-flex flex-wrap">
                        <button id="B201" class="room-button available">201</button>
                        <button id="B202" class="room-button available">202</button>
                        <button id="B203" class="room-button available">203</button>
                        <button id="B204" class="room-button available">204</button>
                        <button id="B205" class="room-button available">205</button>
                        <button id="B206" class="room-button available">206</button>
                        <button id="B207" class="room-button available">207</button>
                        <button id="B208" class="room-button available">208</button>
                        <button id="B209" class="room-button available">209</button>
                        <button id="B210" class="room-button available">210</button>
                        
                    </div>
                </div>

                <!-- Floor 3 -->
                <div class="floor-section">
                    <h3>Floor 3</h3>
                    <div class="d-flex flex-wrap">
                        <button id="B301" class="room-button available">301</button>
                        <button id="B302" class="room-button available">302</button>
                        <button id="B303" class="room-button available">303</button>
                        <button id="B304" class="room-button available">304</button>
                        <button id="B305" class="room-button available">305</button>
                        <button id="B306" class="room-button available">306</button>
                        <button id="B307" class="room-button available">307</button>
                        <button id="B308" class="room-button available">308</button>
                        <button id="B309" class="room-button available">309</button>
                        <button id="B310" class="room-button available">310</button>
                        
                    </div>
                </div>

                <!-- Floor 4 -->
                <div class="floor-section">
                    <h3>Floor 4</h3>
                    <div class="d-flex flex-wrap">
                        <button id="B401" class="room-button available">401</button>
                        <button id="B402" class="room-button available">402</button>
                        <button id="B403" class="room-button available">403</button>
                        <button id="B404" class="room-button available">404</button>
                        <button id="B405" class="room-button available">405</button>
                        <button id="B406" class="room-button available">406</button>
                        <button id="B407" class="room-button available">407</button>
                        <button id="B408" class="room-button available">408</button>
                        <button id="B409" class="room-button available">409</button>
                        <button id="B410" class="room-button available">410</button>
                        
                    </div>
                </div>
                
                <!-- Floor 5 -->
                <div class="floor-section">
                    <h3>Floor 5</h3>
                    <div class="d-flex flex-wrap">
                        <button id="B501" class="room-button available">501</button>
                        <button id="B502" class="room-button available">502</button>
                        <button id="B503" class="room-button available">503</button>
                        <button id="B504" class="room-button available">504</button>
                        <button id="B505" class="room-button available">505</button>
                        <button id="B506" class="room-button available">506</button>
                        <button id="B507" class="room-button available">507</button>
                        <button id="B508" class="room-button available">508</button>
                        <button id="B509" class="room-button available">509</button>
                        <button id="B510" class="room-button available">510</button>
                        
                    </div>
                </div>
                
                 <!-- Floor 6 -->
                <div class="floor-section">
                    <h3>Floor 6</h3>
                    <div class="d-flex flex-wrap">
                        <button id="B601" class="room-button available">601</button>
                        <button id="B602" class="room-button available">602</button>
                        <button id="B603" class="room-button available">603</button>
                        <button id="B604" class="room-button available">604</button>
                        <button id="B605" class="room-button available">605</button>
                        <button id="B606" class="room-button available">606</button>
                        <button id="B607" class="room-button available">607</button>
                        <button id="B608" class="room-button available">608</button>
                        <button id="B609" class="room-button available">609</button>
                        <button id="B610" class="room-button available">610</button>
                        
                    </div>
                </div>
            </div>`;
});

document.getElementById('bookings-link').addEventListener('click', () => {
    content.innerHTML = `<h2>Bookings</h2>`;
});

document.getElementById('food-link').addEventListener('click', () => {
    content.innerHTML = `<h2>Food</h2>`;
});

document.getElementById('bar-link').addEventListener('click', () => {
    content.innerHTML = `<h2>Bar</h2>`;
});

document.getElementById('reports-link').addEventListener('click', () => {
    content.innerHTML = `<h2>Reports</h2>`;
});

document.getElementById('settings-link').addEventListener('click', () => {
    content.innerHTML = `<h2>Settings</h2>`;
});
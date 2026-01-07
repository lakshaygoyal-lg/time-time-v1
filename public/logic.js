document.addEventListener("DOMContentLoaded", async () => {

    // State
    let dayMap = { "Monday": 1, "Tuesday": 2, "Wednesday": 3, "Thursday": 4, "Friday": 5, "Saturday": 6, "Sunday": 7 };
    let countryList = { "AF": "Afghanistan", "AL": "Albania", "DZ": "Algeria", "AS": "American Samoa", "AD": "Andorra", "AO": "Angola", "AI": "Anguilla", "AQ": "Antarctica", "AG": "Antigua and Barbuda", "AR": "Argentina", "AM": "Armenia", "AW": "Aruba", "AU": "Australia", "AT": "Austria", "AZ": "Azerbaijan", "BS": "Bahamas (the)", "BH": "Bahrain", "BD": "Bangladesh", "BB": "Barbados", "BY": "Belarus", "BE": "Belgium", "BZ": "Belize", "BJ": "Benin", "BM": "Bermuda", "BT": "Bhutan", "BO": "Bolivia ", "BQ": "Bonaire, Sint Eustatius and Saba", "BA": "Bosnia and Herzegovina", "BW": "Botswana", "BV": "Bouvet Island", "BR": "Brazil", "IO": "British Indian Ocean Territory ", "BN": "Brunei Darussalam", "BG": "Bulgaria", "BF": "Burkina Faso", "BI": "Burundi", "CV": "Cabo Verde", "KH": "Cambodia", "CM": "Cameroon", "CA": "Canada", "KY": "Cayman Islands ", "CF": "Central African Republic ", "TD": "Chad", "CL": "Chile", "CN": "China", "CX": "Christmas Island", "CC": "Cocos (Keeling) Islands ", "CO": "Colombia", "KM": "Comoros (the)", "CD": "Congo ", "CG": "Congo ", "CK": "Cook Islands ", "CR": "Costa Rica", "HR": "Croatia", "CU": "Cuba", "CW": "Curaçao", "CY": "Cyprus", "CZ": "Czechia", "CI": "Côte d'Ivoire", "DK": "Denmark", "DJ": "Djibouti", "DM": "Dominica", "DO": "Dominican Republic ", "EC": "Ecuador", "EG": "Egypt", "SV": "El Salvador", "GQ": "Equatorial Guinea", "ER": "Eritrea", "EE": "Estonia", "SZ": "Eswatini", "ET": "Ethiopia", "FK": "Falkland Islands ", "FO": "Faroe Islands ", "FJ": "Fiji", "FI": "Finland", "FR": "France", "GF": "French Guiana", "PF": "French Polynesia", "TF": "French Southern Territories", "GA": "Gabon", "GM": "Gambia", "GE": "Georgia", "DE": "Germany", "GH": "Ghana", "GI": "Gibraltar", "GR": "Greece", "GL": "Greenland", "GD": "Grenada", "GP": "Guadeloupe", "GU": "Guam", "GT": "Guatemala", "GG": "Guernsey", "GN": "Guinea", "GW": "Guinea-Bissau", "GY": "Guyana", "HT": "Haiti", "HM": "Heard Island and McDonald Islands", "VA": "Holy See ", "HN": "Honduras", "HK": "Hong Kong", "HU": "Hungary", "IS": "Iceland", "IN": "India", "ID": "Indonesia", "IR": "Iran ", "IQ": "Iraq", "IE": "Ireland", "IM": "Isle of Man", "IL": "Israel", "IT": "Italy", "JM": "Jamaica", "JP": "Japan", "JE": "Jersey", "JO": "Jordan", "KZ": "Kazakhstan", "KE": "Kenya", "KI": "Kiribati", "KP": "Korea ", "KR": "Korea ", "KW": "Kuwait", "KG": "Kyrgyzstan", "LA": "Lao People's Democratic Republic ", "LV": "Latvia", "LB": "Lebanon", "LS": "Lesotho", "LR": "Liberia", "LY": "Libya", "LI": "Liechtenstein", "LT": "Lithuania", "LU": "Luxembourg", "MO": "Macao", "MG": "Madagascar", "MW": "Malawi", "MY": "Malaysia", "MV": "Maldives", "ML": "Mali", "MT": "Malta", "MH": "Marshall Islands", "MQ": "Martinique", "MR": "Mauritania", "MU": "Mauritius", "YT": "Mayotte", "MX": "Mexico", "FM": "Micronesia", "MD": "Moldova", "MC": "Monaco", "MN": "Mongolia", "ME": "Montenegro", "MS": "Montserrat", "MA": "Morocco", "MZ": "Mozambique", "MM": "Myanmar", "NA": "Namibia", "NR": "Nauru", "NP": "Nepal", "NL": "Netherlands", "NC": "New Caledonia", "NZ": "New Zealand", "NI": "Nicaragua", "NE": "Niger", "NG": "Nigeria", "NU": "Niue", "NF": "Norfolk Island", "MP": "Northern Mariana Islands", "NO": "Norway", "OM": "Oman", "PK": "Pakistan", "PW": "Palau", "PS": "Palestine, State of", "PA": "Panama", "PG": "Papua New Guinea", "PY": "Paraguay", "PE": "Peru", "PH": "Philippines", "PN": "Pitcairn", "PL": "Poland", "PT": "Portugal", "PR": "Puerto Rico", "QA": "Qatar", "MK": "Republic of North Macedonia", "RO": "Romania", "RU": "Russian Federation", "RW": "Rwanda", "RE": "Réunion", "BL": "Saint Barthélemy", "SH": "Saint Helena, Ascension and Tristan da Cunha", "KN": "Saint Kitts and Nevis", "LC": "Saint Lucia", "MF": "Saint Martin", "PM": "Saint Pierre and Miquelon", "VC": "Saint Vincent and the Grenadines", "WS": "Samoa", "SM": "San Marino", "ST": "Sao Tome and Principe", "SA": "Saudi Arabia", "SN": "Senegal", "RS": "Serbia", "SC": "Seychelles", "SL": "Sierra Leone", "SG": "Singapore", "SX": "Sint Maarten", "SK": "Slovakia", "SI": "Slovenia", "SB": "Solomon Islands", "SO": "Somalia", "ZA": "South Africa", "GS": "South Georgia and the South Sandwich Islands", "SS": "South Sudan", "ES": "Spain", "LK": "Sri Lanka", "SD": "Sudan", "SR": "Suriname", "SJ": "Svalbard and Jan Mayen", "SE": "Sweden", "CH": "Switzerland", "SY": "Syrian Arab Republic", "TW": "Taiwan", "TJ": "Tajikistan", "TZ": "Tanzania, United Republic of", "TH": "Thailand", "TL": "Timor-Leste", "TG": "Togo", "TK": "Tokelau", "TO": "Tonga", "TT": "Trinidad and Tobago", "TN": "Tunisia", "TR": "Turkey", "TM": "Turkmenistan", "TC": "Turks and Caicos Islands", "TV": "Tuvalu", "UG": "Uganda", "UA": "Ukraine", "AE": "United Arab Emirates", "GB": "United Kingdom of Great Britain and Northern Ireland", "UM": "United States Minor Outlying Islands", "US": "United States of America", "UY": "Uruguay", "UZ": "Uzbekistan", "VU": "Vanuatu", "VE": "Venezuela", "VN": "Viet Nam", "VG": "Virgin Islands-British", "VI": "Virgin Islands-U.S.", "WF": "Wallis and Futuna", "EH": "Western Sahara", "YE": "Yemen", "ZM": "Zambia", "ZW": "Zimbabwe", "AX": "Åland Islands" };
    let curCountryCode = "IN";
    let curCountryName="India";
    let curTimezone = "Asia/Kolkata";
    let baseTime=null;

    let syncInterval=null;
    let tickInterval=null;


    // DOM
    let curYear = document.querySelectorAll(".cur-year");
    let curHour = document.querySelectorAll(".cur-hour");
    let curMin = document.querySelectorAll(".cur-min");
    let curSec = document.querySelectorAll(".cur-sec");
    let curMonth = document.querySelectorAll(".cur-month");
    let curDay = document.querySelectorAll(".cur-date");
    let curMilSec = document.querySelector("#cur-ms");
    let curWeek = document.querySelector("#cur-week");

    let progressDay = document.querySelector("#progress-day");
    let progressWeek = document.querySelector("#progress-week");
    let progressYear = document.querySelector("#progress-year");

    let countryTimezones = document.querySelector("#country-timezone");
    let countrySelect = document.querySelector("#country-name");

    // Helpers
    function clearIntervals(){
        clearInterval(syncInterval);
        clearInterval(tickInterval);
    }
    
    async function updateTimeDOM() {
        const {second, minute, hour, millisecond, day, month, year, weekday}=baseTime;
        curHour.forEach(e=>e.textContent=hour);
        curMin.forEach(e=>e.textContent=minute);
        curSec.forEach(e=>e.textContent=second);
        curYear.forEach(e=>e.textContent=year);
        curMonth.forEach(e=>e.textContent=month);
        curDay.forEach(e=>e.textContent=day);

        curMilSec.textContent = millisecond;
        curWeek.textContent = weekday;
        document.querySelector("#cur-country").textContent=curCountryName;

        const weekdayNum=dayMap[weekday]?dayMap[weekday]-1:0;
        progressDay.style.width = `${((hour * 3600 + minute * 60 + second) / 86400 * 100).toFixed(2)}%`;
        progressWeek.style.width = `${(((weekdayNum + 1) / 7) * 100).toFixed(2)}%`;
        progressYear.style.width = `${(((month - 1) / 12) * 100).toFixed(2)}%`;
    }

    function tickLocalClock(){
        baseTime.millisecond=(baseTime.millisecond+1)%1000;
        if(baseTime.millisecond===0){
            baseTime.second++;
            if(baseTime.second===60){
                baseTime.second=0;
                baseTime.minute++;
                if(baseTime.minute===60){
                    baseTime.minute=0;
                    baseTime.hour=(baseTime.hour+1)%24;
                }
            }
        }
        updateTimeDOM();
    }

    // API
    async function fetchJSONData(url,payload) {
        const res=await fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(payload)
        });
        if(!res.ok){
            throw new Error(`${url} failed!`);
        }
        return await res.json();
    }


    async function loadTime() {
        return fetchJSONData("/api/get-tz-time",{timezone:curTimezone});
    }

    async function renderTimezone(countryCode) {
        const data=await fetchJSONData("/api/country-timeZ",{country:countryCode});
        countryTimezones.innerHTML="";
        data.forEach(tz=>{
            let option = document.createElement("option");
            option.textContent = tz;
            countryTimezones.appendChild(option);
        });
        curTimezone = data[0];
        await startClock();
    }

    async function startClock(){
        clearIntervals();
        baseTime=await loadTime();
        updateTimeDOM();

        tickInterval=setInterval(tickLocalClock,1);
        syncInterval=setInterval(async()=>{
            baseTime=await loadTime();
        },60000);
    }

    // Country-flags
    document.querySelectorAll(".flag").forEach(curCountryFlag=>{
        curCountryFlag.setAttribute("src", `https://flagsapi.com/${curCountryFlag.id}/flat/64.png`);
        curCountryFlag.addEventListener("click",async (event) => {
            curCountryCode=event.target.id;            
            curCountryName = countryList[curCountryCode];
            countrySelect.value=curCountryCode;
            document.getElementById("time-info-view").scrollIntoView({ behavior: "smooth" });
            await renderTimezone(curCountryCode);
        });
    });

    // Creating Country options 
    for (const [countryCode, countryName] of Object.entries(countryList)) {
        let option = document.createElement("option");
        option.value = countryCode;
        option.textContent = countryName;
        if (countryName == curCountryName) {
            option.selected = true;
        }
        countrySelect.appendChild(option);
    }

    // Updating time based on the Country selected from country form
    document.querySelector("#country-form").addEventListener("submit", async (event) => {
        event.preventDefault();
        curCountryCode= countrySelect.value;
        curCountryName = countryList[curCountryCode];
        document.getElementById("time-info-view").scrollIntoView({ behavior: "smooth" });
        await renderTimezone(curCountryCode);
    });

    // Adjusting time based on the selected timezone
    document.querySelector("#countries-timezone").addEventListener("submit", async (event) => {
        event.preventDefault();
        curTimezone = countryTimezones.value;
        await startClock();
    });
    
    // Time-Since
    document.querySelector("#from-to-form").addEventListener("submit", async (event) => {
        event.preventDefault();
        const fromDate = document.querySelector("#fromDate").value;
        const toDate = document.querySelector("#toDate").value;
        const data = await fetchJSONData("/api/from-to-date",{ fromDate: fromDate, toDate: toDate });
        document.querySelector(".form-data-result").classList.remove("hidden");
        document.querySelector("#time-since-res").innerHTML = `
            ${data.years === 0 ? '' : `<div>${data.years} year(s),</div>`}
            ${data.months === 0 ? '' : `<div>${data.months} month(s),</div>`}
            ${data.days === 0 ? '' : `<div>${data.days} day(s)</div>`}
        `;

        document.querySelector("#time-since-submit-btn").value = "Re-Calculate";
    });
    
    // current-country timezone
    await renderTimezone(curCountryCode);    
});
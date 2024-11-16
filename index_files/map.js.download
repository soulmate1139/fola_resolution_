jQuery(document).ready(function ($) {
    var screenWidth = $(document).width();
    const countriesPath = document.querySelectorAll('#countries path');
    const searchInput = document.getElementById('country-search');
    const mapTooltip = document.querySelectorAll('#map-tooltip-container .map-tooltip');
    const containerElement = document.querySelector('.world-map-sec');


    countriesPath.forEach(function (country) {
        const containerRect = containerElement.getBoundingClientRect();
        const pathRect = country.getBoundingClientRect();
        const topPosition = pathRect.top - containerRect.top;
        const countriesPathBoundingBox = country.getBoundingClientRect();
        // Retrieve the position values
        const countriesPathX = countriesPathBoundingBox.x;
        const countriesPathY = countriesPathBoundingBox.y;
        country.setAttribute('data-left', countriesPathX);
        country.setAttribute('data-top', topPosition);

    });

    function autocomplete(inp, arr) {
        /*the autocomplete function takes two arguments,
         the text field element and an array of possible autocompleted values:*/
        var currentFocus;
        /*execute a function when someone writes in the text field:*/
        inp.addEventListener("input", function (e) {
            var a, b, i, val = this.value;
            /*close any already open lists of autocompleted values*/
            closeAllLists();
            if (!val) {
                return false;
            }
            currentFocus = -1;
            /*create a DIV element that will contain the items (values):*/
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            /*append the DIV element as a child of the autocomplete container:*/
            this.parentNode.appendChild(a);
            /*for each item in the array...*/
            for (i = 0; i < arr.length; i++) {
                /*check if the item starts with the same letters as the text field value:*/
                if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                    /*create a DIV element for each matching element:*/
                    b = document.createElement("DIV");
                    b.setAttribute("class", "country-name");
                    b.setAttribute("id", arr[i]);
                    /*make the matching letters bold:*/
                    b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                    b.innerHTML += arr[i].substr(val.length);
                    /*insert a input field that will hold the current array item's value:*/
                    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                    /*execute a function when someone clicks on the item value (DIV element):*/
                    b.addEventListener("click", function (e) {
                        /*insert the value for the autocomplete text field:*/
                        inp.value = this.getElementsByTagName("input")[0].value;
                        const searchTerm = this.id.toLowerCase();
                        // console.log(searchTerm, 'searchTerm');
                        countriesPath.forEach(function (country) {
                            const countryName = country.getAttribute('data-name').toLowerCase();
                            if (countryName.includes(searchTerm)) {
                                country.classList.add('active');
                                // Retrieve the position values
                                //  var pathX = country.getAttribute('data-left') - 20;
                                var pathY = country.getAttribute('data-top');
                                //  const parseFloatPathYs = (parseFloat(pathY) - parseFloat(pathY) * 0.2);
                                // const pathYs = country.getAttribute('data-top');


                                if (screenWidth > 992) {
                                    var parseFloatPathYs = (parseFloat(pathY) - parseFloat(pathY) * 0.2);
                                    var pathX = country.getAttribute('data-left') - 20;
                                } else {
                                    var parseFloatPathYs = (parseFloat(pathY) - parseFloat(pathY) * 0.1);
                                    var pathX = country.getAttribute('data-left') - 70;

                                }

                                // const pathWidth = pathBoundingBox.width;
                                // const pathHeight = pathBoundingBox.height;
//                                console.log('Path X:', pathX);
//                                console.log('Path Y:', pathYs);
                                mapTooltip.forEach(function (tooltip) {
                                    const tooltipName = tooltip.getAttribute('data-name').toLowerCase();
                                    if (tooltipName.includes(searchTerm)) {
                                        tooltip.classList.add('active');
                                        // Set the position of the tooltip div
                                        tooltip.style.left = `${pathX}px`;
                                        tooltip.style.top = `${parseFloatPathYs}px`;
                                    } else {
                                        tooltip.classList.remove('active');
                                        tooltip.style.left = `0px`;
                                        tooltip.style.top = `0px`;
                                    }
                                });

                            } else {
                                country.classList.remove('active');
                            }

                        });

                        searchInput.classList.add('active');
                        /*close the list of autocompleted values,
                         (or any other open lists of autocompleted values:*/
                        closeAllLists();
                    });
                    a.appendChild(b);
                }
            }
        });

        function closeAllLists(elmnt) {
            /*close all autocomplete lists in the document,
             except the one passed as an argument:*/
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
                if (elmnt != x[i] && elmnt != inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }
        /*execute a function when someone clicks in the document:*/
        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
        });
    }

    /*An array containing all the country names in the world:*/
    var inputCountries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

    /*initiate the autocomplete function on the "country-search" element, and pass along the inputCountries array as possible autocomplete values:*/
    autocomplete(document.getElementById("country-search"), inputCountries);

    searchInput.addEventListener('input', function () {
        searchInput.classList.remove('active');
        // Event handling code goes here
        countriesPath.forEach(function (country) {
            country.classList.remove('active');
        });
        mapTooltip.forEach(function (tooltip) {
            tooltip.classList.remove('active');
        });



    });



    // For Mobile

   // if (jQuery(window).innerWidth() <= 767) {

        searchInput.addEventListener('input', function () {
            const searchTerm = this.value.toLowerCase();
            countriesPath.forEach(function (country) {
                const countryName = country.getAttribute('data-name').toLowerCase();
                const countrySearchautocomplete = document.querySelectorAll('#country-searchautocomplete-list');
                if (countryName === searchTerm) {
                    var pathY = country.getAttribute('data-top');
                    country.classList.add('active');
                    $('#country-searchautocomplete-list').hide();
                    searchInput.classList.add('active');

                    if (screenWidth > 992) {
                        var parseFloatPathYs = (parseFloat(pathY) - parseFloat(pathY) * 0.2);
                        var pathX = country.getAttribute('data-left') - 20;
                    } else {
                        var parseFloatPathYs = (parseFloat(pathY) - parseFloat(pathY) * 0.1);
                        var pathX = country.getAttribute('data-left') - 70;

                    }
                    mapTooltip.forEach(function (tooltip) {
                        const tooltipName = tooltip.getAttribute('data-name').toLowerCase();
                        if (tooltipName === searchTerm) {
                            tooltip.classList.add('active');
                            tooltip.style.left = `${pathX}px`;
                            tooltip.style.top = `${parseFloatPathYs}px`;
                        } else {
                            tooltip.classList.remove('active');
                        }
                    });

                } else {
                    country.classList.remove('active');
                }

            });
        });
   // }




}); //main


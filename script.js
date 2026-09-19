// ===================================
// NAVIGATION HIGHLIGHTING FUNCTION
// ===================================
function highlightCurrentPage() {
	var currentPage = window.location.pathname.split('/').pop();
	var navLinks = document.querySelectorAll('.menu a');
	var i;

	if (currentPage === "") {
		currentPage = "index.html";
	}

	for (i = 0; i < navLinks.length; i++) {
		navLinks[i].classList.remove('active');
		if (navLinks[i].getAttribute('href') === currentPage) {
			navLinks[i].classList.add('active');
		}
	}
}

// ===================================
// FOOTER YEAR FUNCTION
// ===================================
function setFooterYear() {
	var yearSpan = document.getElementById("footerYear");
	if (yearSpan) {
		yearSpan.textContent = new Date().getFullYear();
	}
}

// ===================================
// TV TECHNOLOGY PIE CHART (placeholder data)
// only present on televisions.html - exits quietly on other pages
// ===================================
function initTechChart() {
	var ctx = document.getElementById("techPieChart");
	if (!ctx) {
		return;
	}

	new Chart(ctx, {
		type: "pie",
		data: {
			labels: ["LED / LCD", "OLED", "Plasma (legacy)"],
			datasets: [{
				data: [72, 24, 4],
				backgroundColor: ["#BD5A2C", "#DCA53E", "#6B4E33"]
			}]
		},
		options: {
			responsive: true,
			plugins: {
				legend: {
					position: "bottom"
				}
			}
		}
	});
}

// ===========================
// MAIN INITIALIZATION FUNCTION
// ===========================
function init() {
	highlightCurrentPage();
	setFooterYear();
	initTechChart();
}

window.onload = init;

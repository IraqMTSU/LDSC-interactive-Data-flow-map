


const diagram = document.getElementById("diagram");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
  const button4 = document.getElementById("button4");
  const button5 = document.getElementById("button5");
  const button6 = document.getElementById("button6");
  const button7 = document.getElementById("button7");
  
  const placeholderDiagram = `
graph LR
A["Placeholder Diagram"]
`;
const diagram3 = `
graph TB
A["Tracker attendance sheet"] --> D["Team archiving storage"]
D --> B["IPTT"]
B --> C["Data Reporting"]
Button1Clicked["Indicator 3 Number and percentage of participants who complete vocational training courses"] -.-> A
`;

const diagram4 = `
graph LR
A["Data Collection"] --> D["Data Processing"]
D --> B["Data Storage"]
B --> C["Data Reporting"]
Button1Clicked["Indicator 1 - %program participants who self-report increased income"] -.-> A
`;


const diagram5 =  `
graph TB
A["Use of grant tool/PDM"] --> D["CommCare LDSC space"]
D --> B["Master datbase - Excel"]
B --> C["IPTT"]
C --> F["Data Reporting"]

Button1Clicked["Indicator 5. Number and percentage of beneficiaries who started their own businesses"] -.-> A
`;

const diagram6 =  `
graph TB
A[" Post test - attendance sheet"] --> D["Team archiving storage"]
D --> B["IPTT"]
B --> C["Data Reporting"]
Button1Clicked["Ind. 6: % of SED training attendees that complete SED training"] -.-> A
`;

const diagram7 =  `
graph TB
A["Coaching tool"] --> D["CommCare LDSC space"]
D --> B["Master datbase - Excel"]
B --> C["IPTT"]
C --> F["Data Reporting"]

Button1Clicked["IInd7. # of participants that receive coaching during business start-up” asession"] -.-> A
`;

// Diagram definitions without HTML tags for icons
const diagram1 = `
graph TB
A["Registration - Tool"] --> B["Verification - Tool"]
B --> C["Attendance Sheet"]
C --> D["Business Plan Scoring"]
D --> E["Interview Tool"]
E --> F["Post Test - Template"]
F --> G["Signature Sheet"]
G --> H["PDM"]
H --> I["Use of Grant Tool"]
I --> J["Coaching tool"]
J --> K["Endline"]

style A fontSize:50px
style B fontSize:12px
style C fontSize:24px
style D fontSize:24px
style E fontSize:24px
style F fontSize:24px
style G fontSize:24px
style H fontSize:24px
style I fontSize:24px
style J fontSize:24px

Button1Clicked["Beneficiaries' data flow through MEAL system"] -.-> A
`;


const diagram2 = `
graph TB
A["Endline Survey tool"] --> D["CommCare LDSC space"]
D --> B["Master database - Excel"]
B --> C["IPTT"]
C --> F["Data reporting"]
Button1Clicked["Ind. 1 %program participants self-report increased income,<br>Ind. 2 # and % of beneficiaries report they are able to meet their basic needs,<br>Ind. 4 # and % of participants using skills obtained in vocational training"] -.-> A
`;

const diagramAll = `
graph TB
A["Data Collection"] -->|Path 1| B["Data Storage"]
A -->|Path 2| D["Data Processing"]
D --> B
B --> C["Data Reporting"]
Button1Clicked["Button 1 Clicked"] -.-> A
`;

// Function to inject Font Awesome icons
function injectIcons(svg) {
  const icons = [
    {text: "Data Collection", icon: "<i class='fas fa-database'></i>"},
    {text: "Data Storage", icon: "<i class='fas fa-hdd'></i>"},
    {text: "Data Reporting", icon: "<i class='fas fa-chart-bar'></i>"},
    {text: "Data Processing", icon: "<i class='fas fa-cogs'></i>"}
  ];

  icons.forEach(({text, icon}) => {
    svg.querySelectorAll(`tspan:contains("${text}")`).forEach(tspan => {
      const parent = tspan.parentNode;
      parent.innerHTML = icon + ' ' + parent.innerHTML;
    });
  });
}



// The rest of the script.js file remains unchanged...




// Add the new button elements
const showAllButton = document.getElementById("showAll");
const hideAllButton = document.getElementById("hideAll");





// Add event listeners for the new buttons


hideAllButton.addEventListener("click", () => {
  hideDiagram();
});


// Add a new function to hide the diagram
function hideDiagram() {
  diagram.innerHTML = "";
}


function updateDiagram(diagram) {
  mermaid.render('diagram', diagram, (svgCode) => {
    const parser = new DOMParser();
    const svg = parser.parseFromString(svgCode, 'image/svg+xml').documentElement;
    injectIcons(svg);
    document.getElementById('diagram').innerHTML = '';
    document.getElementById('diagram').appendChild(svg);
  });
}


function hideDiagram() {
  diagram.innerHTML = "";
}
updateDiagram(diagram1);

if (button1) {
  button1.addEventListener("click", () => {
    updateDiagram(diagram1);
  });
}

if (button2) {
  button2.addEventListener("click", () => {
    updateDiagram(diagram2);
  });
}

if (button3) {
  button3.addEventListener("click", () => {
    updateDiagram(diagram3);
  });
}

if (button4) {
  button4.addEventListener("click", () => {
    updateDiagram(diagram4);
  });
}

if (button5) {
  button5.addEventListener("click", () => {
    updateDiagram(diagram5);
  });
}

if (button6) {
  button6.addEventListener("click", () => {
    updateDiagram(diagram6);
  });
}

if (button7) {
  button7.addEventListener("click", () => {
    updateDiagram(diagram7);
  });
}

showAllButton.addEventListener("click", () => {
  updateDiagram(diagramAll);
});

function updateDiagram(diagramMarkup) {
  mermaid.render('graphDiv', diagramMarkup, (svgGraph) => {
    diagram.innerHTML = svgGraph;
  });
}

// Initialize with the first diagram
//updateDiagram(diagram1);

const searchDrug = $("#search-drug");
searchDrug.on("click", function get(event) {
  event.preventDefault();
  const drug = document.getElementById("project-name").value;
  const drug2 = document.getElementById("project-funding").value;
  const getDrugId = async () => {
    const result = await fetch(
      `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${drug}&search=2`,
      {
        method: "GET",
      }
    );
    const result2 = await fetch(
      `https://rxnav.nlm.nih.gov/REST/rxcui.json?name=${drug2}&search=2`,
      {
        method: "GET",
      }
    );
    const json = await result.json();
    const drugId = json.idGroup.rxnormId[0];
    const json2 = await result2.json();
    const drugId2 = json2.idGroup.rxnormId[0];
    getDrug(drugId, drugId2);
  };
  getDrugId();
  const getDrug = async (drugId, drugId2) => {
    const result = await fetch(
      `https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${drugId}&sources=DrugBank`,
      {
        method: "GET",
      }
    );
    const json = await result.json();
    const drugRelation =
      json.interactionTypeGroup[0].interactionType[0].interactionPair;
    for (let i = 0; i < drugRelation.length; i++) {
      const drugId = drugRelation[i].interactionConcept[1].minConceptItem.rxcui;
      const drugDescription = drugRelation[i].description;
      const secondDrug = drugId2;
      if (secondDrug === drugId) {
        const drugOutput = drugDescription;
        // send the data to the webpage
        $("#output").empty();
        $("#output").append(`<p id="output-field">${drugOutput}</p>`);
      }
    }
  };
});

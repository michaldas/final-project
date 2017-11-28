app.factory("costs", function(Cost) {
    var costs = [];

    function getAll() {
        return costs;
    }

    function getCostById(index) {
        return costs[index];
    }

    function addCost(cost) {
        costs.push(cost);
    }

    function setCosts(costsPlain) {
        costs = [];
        for (var i = 0; i < costsPlain.length; i++) {
            costs.push(new Cost(costsPlain[i].costelement, meetsPlain[i].amount))
        }
    }

    return {
        getAll: getAll,
        getMeetById: getCostById,
        addMeet: addCost,
        setMeets: setCosts
    }
})
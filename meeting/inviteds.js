app.factory("inviteds", function(Invited) {
    var inviteds = [];

    function getAll() {
        return inviteds;
    }

    function getCostById(index) {
        return inviteds[index];
    }

    function addCost(invited) {
        inviteds.push(invited);
    }

    function setCosts(invitedsPlain) {
        inviteds = [];
        for (var i = 0; i < invitedsPlain.length; i++) {
            inviteds.push(new Invited(invitedsPlain[i].name, invitedsPlain[i].amount))
        }
    }

    return {
        getAll: getAll,
        getMeetById: getCostById,
        addMeet: addCost,
        setMeets: setCosts
    }
})
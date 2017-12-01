app.factory("inviteds", function(Invited) {
    var inviteds = [];

    function getAll() {
        return inviteds;
    }

    function getInvitedById(index) {
        return inviteds[index];
    }

    function addInvited(invited) {
        inviteds.push(invited);
    }

    function setInviteds(invitedsPlain) {
        inviteds = [];
        for (var i = 0; i < invitedsPlain.length; i++) {
            inviteds.push(new Invited(invitedsPlain[i].name, invitedsPlain[i].amount))
        }
    }

    return {
        getAll: getAll,
        getInvitedById: getInvitedById,
        addInvited: addInvited,
        setInviteds: setInviteds
    }
})
module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) return false;

  let teamName = [];
  for (member of members) {
    if (typeof member === "string") {
      teamName.push(member.trim()[0].toUpperCase());
    }
  }
  teamName = teamName.sort().join('');

  return teamName;
};
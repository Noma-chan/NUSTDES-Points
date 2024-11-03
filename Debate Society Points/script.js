// Array of participants with aliases and points
const participants = [
    { name: "Noma", alias: "Kenshin Himura", points: 1, rounds:[1, '_', '_', '_'] },
    { name: "Denzel", alias: "Ash Ketchum", points: 0, rounds:[0,'_', '_', '_'] },
    { name: "Russell", alias: "Light Yagami", points: 0, rounds:[0, '_', '_', '_'] },
    { name: "Rodney", alias: "Naruto Uzumaki", points: 4, rounds:[1, 3, '_', '_',] },
    { name: "Tino", alias: "Levi Ackerman", points: 4, rounds:[3, 1,'_', '_'] },
    { name: "Huldah", alias: "Usagi Tsukino", points: 3, rounds:[3,'_', '_', '_'] },
    { name: "Ropa", alias: "Sakura Kinomoto", points: 3, rounds:[2, 1,'_', '_'] },
    { name: "Nokwanda", alias: "Edward Elric", points: 2, rounds:[1, 1,'_', '_'] },
    { name: "Ivan", alias: "Spike Spiegel", points: 4, rounds:[2, 2, '_', '_'] },
    { name: "Cros", alias: "Alucard Hellsing", points: 2, rounds:[2,'_', '_', '_'] },
    { name: "Prince", alias: "Kazuto Kirigaya", points: 5, rounds:[3, 2, '_', '_'] },
    { name: "Nyasha", alias: "Monkey D. Luffy", points: 3, rounds:[3,'_', '_', '_'] },
    { name: "Tinaye", alias: "Inuyasha Taisho", points: 0, rounds:[0,'_', '_', '_'] },
    { name: "Sharnade", alias: "Yusuke Urameshi", points: 2, rounds:[0, 2, '_', '_'] },
    { name: "Ted", alias: "Son Goku", points: 0, rounds:[0, 0, '_', '_'] }
];

participants.sort((a,b) => b.points - a.points);

// Function to populate the ranking list
document.addEventListener('DOMContentLoaded', () => {
    const rankingsTable = document.getElementById('rankings');
    participants.forEach((participant, index) => {
        const row= document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td
                class="hover-name">${participant.alias}</td>
            <td>${participant.points}</td>
            <td>${participant.rounds[0]}</td>
            <td>${participant.rounds[1]}</td>
            <td>${participant.rounds[2]}</td>
            <td>${participant.rounds[3]}</td>
            `;
    rankingsTable.appendChild(row);
});
    });





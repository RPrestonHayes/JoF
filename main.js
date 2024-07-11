async function getRandomName() {
    try {
        const response = await fetch('https://uinames.com/api/?amount=1&gender=male');
        const data = await response.json();
        const { name, surname, region } = data;
        return `${name} ${surname} (${region})`;
    } catch (error) {
        console.error('Error fetching data:', error);
        return 'Error fetching data';
    }
}

getRandomName().then(console.log); // Example usage


let shinyEnabled = false;
let activeType = null; // Can be 'normal', 'gold', 'rainbow', or 'eggs' or 'exclusives'

function toggleShiny() {
    shinyEnabled = !shinyEnabled;
    document.getElementById('shinyBtn').classList.toggle('active', shinyEnabled);
    filterItems();
}

function toggleFilter(type) {
    if (activeType === type) {
        activeType = null;
        document.getElementById(type + 'Btn').classList.remove('active');
    } else {
        activeType = type;
        document.getElementById('normalBtn').classList.remove('active');
        document.getElementById('goldBtn').classList.remove('active');
        document.getElementById('rainbowBtn').classList.remove('active');
        document.getElementById('exclusiveBtn').classList.remove('active');
        document.getElementById('eggBtn').classList.remove('active');		
        document.getElementById(type + 'Btn').classList.add('active');
    }
    filterItems();
}

function filterItems() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const itemName = item.querySelector('.item-info strong').textContent.toLowerCase();
        const isShiny = itemName.includes('shiny');
        const isGold = itemName.includes('gold');
        const isRainbow = itemName.includes('rainbow');
        const isNormal = itemName.includes('normal');
        const isExclusive = itemName.includes('exclusive');
		const isegg = itemName.includes('egg')

        let showItem = true;

        if (shinyEnabled && !isShiny) showItem = false;
        if (!shinyEnabled && isShiny) showItem = false;

        if (activeType === 'normal' && !isNormal) showItem = false;
        if (activeType === 'gold' && !isGold) showItem = false;
        if (activeType === 'rainbow' && !isRainbow) showItem = false;
        if (activeType === 'exclusive' && !isExclusive) showItem = false;
		if (activeType === 'egg' && !isegg) showItem = false;

        if (itemName.includes(searchInput) && showItem) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

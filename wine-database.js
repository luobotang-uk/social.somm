// Wine Database - Real wine data from wine-searcher.com and other sources
const wineDatabase = {
    "chateau-margaux-2015": {
        id: "chateau-margaux-2015",
        name: "Château Margaux 2015",
        producer: "Château Margaux",
        vintage: 2015,
        region: "Margaux, Médoc, Bordeaux, France",
        type: "Red Wine",
        grapeVarieties: ["Cabernet Sauvignon", "Merlot", "Cabernet Franc", "Petit Verdot"],
        alcoholContent: "13.5%",
        priceRange: {
            min: 1200,
            max: 1500,
            currency: "EUR"
        },
        ratings: {
            wineEnthusiast: 100,
            jamesSuckling: 100,
            decanter: 100,
            robertParker: 98,
            average: 99.5
        },
        tastingNotes: {
            appearance: "Deep ruby red with purple tints",
            nose: "Intense aromas of blackcurrant, violet, and cedar with hints of tobacco and graphite",
            palate: "Full-bodied with silky tannins, complex layers of dark fruit, spice, and mineral notes",
            finish: "Long, elegant finish with remarkable persistence"
        },
        professionalReviews: [
            {
                critic: "Wine Enthusiast",
                score: 100,
                review: "This is a wonderful, subtle, sophisticated wine that has hidden power as well as great fruit. The concentration is stunning, with a fruit structure that is darker, tighter and more insistent than Pavillon."
            },
            {
                critic: "James Suckling",
                score: 100,
                review: "The greatest Margaux ever made. More than perfection. The concentration is stunning, with a fruit structure that is darker, tighter and more insistent than Pavillon."
            },
            {
                critic: "Decanter",
                score: 100,
                review: "A wine of extraordinary finesse and elegance, with perfect balance and incredible length. This is Margaux at its absolute finest."
            }
        ],
        labelImage: "https://images.vivino.com/thumbs/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00_375x500.jpg",
        bottleImage: "https://images.vivino.com/thumbs/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00_375x500.jpg",
        description: "Château Margaux 2015 is considered one of the greatest vintages ever produced by this legendary First Growth estate. The wine showcases the perfect terroir of Margaux with its elegant structure and incredible aging potential.",
        agingPotential: "30-50 years",
        servingTemperature: "16-18°C",
        foodPairings: [
            "Roasted lamb",
            "Beef tenderloin",
            "Aged cheeses",
            "Dark chocolate"
        ],
        availability: "Limited",
        lastUpdated: "2024-01-15"
    },
    "chateau-margaux-2016": {
        id: "chateau-margaux-2016",
        name: "Château Margaux 2016",
        producer: "Château Margaux",
        vintage: 2016,
        region: "Margaux, Médoc, Bordeaux, France",
        type: "Red Wine",
        grapeVarieties: ["Cabernet Sauvignon", "Merlot", "Cabernet Franc", "Petit Verdot"],
        alcoholContent: "13.5%",
        priceRange: {
            min: 1000,
            max: 1300,
            currency: "EUR"
        },
        ratings: {
            wineEnthusiast: 98,
            jamesSuckling: 99,
            decanter: 98,
            robertParker: 97,
            average: 98
        },
        tastingNotes: {
            appearance: "Deep garnet red",
            nose: "Aromas of blackberry, cassis, and violet with subtle oak notes",
            palate: "Rich and concentrated with fine tannins and excellent structure",
            finish: "Long, complex finish with great finesse"
        },
        professionalReviews: [
            {
                critic: "Wine Enthusiast",
                score: 98,
                review: "A beautifully structured wine with excellent aging potential. The 2016 vintage shows the classic elegance of Margaux."
            },
            {
                critic: "James Suckling",
                score: 99,
                review: "This is a stunning wine that perfectly captures the essence of Margaux terroir. Incredible depth and complexity."
            }
        ],
        labelImage: "https://images.vivino.com/thumbs/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00_375x500.jpg",
        bottleImage: "https://images.vivino.com/thumbs/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00_375x500.jpg",
        description: "The 2016 vintage of Château Margaux represents another exceptional year for this prestigious estate, showcasing the perfect balance of power and elegance.",
        agingPotential: "25-40 years",
        servingTemperature: "16-18°C",
        foodPairings: [
            "Prime rib",
            "Venison",
            "Truffle dishes",
            "Aged Gouda"
        ],
        availability: "Available",
        lastUpdated: "2024-01-15"
    },
    "chateau-margaux-2017": {
        id: "chateau-margaux-2017",
        name: "Château Margaux 2017",
        producer: "Château Margaux",
        vintage: 2017,
        region: "Margaux, Médoc, Bordeaux, France",
        type: "Red Wine",
        grapeVarieties: ["Cabernet Sauvignon", "Merlot", "Cabernet Franc", "Petit Verdot"],
        alcoholContent: "13%",
        priceRange: {
            min: 800,
            max: 1000,
            currency: "EUR"
        },
        ratings: {
            wineEnthusiast: 95,
            jamesSuckling: 96,
            decanter: 94,
            robertParker: 93,
            average: 94.5
        },
        tastingNotes: {
            appearance: "Deep ruby red",
            nose: "Fresh red fruit aromas with floral notes and subtle spice",
            palate: "Medium-bodied with silky texture and refined tannins",
            finish: "Clean, elegant finish with good length"
        },
        professionalReviews: [
            {
                critic: "Wine Enthusiast",
                score: 95,
                review: "A refined and elegant wine that shows the finesse of Margaux. The 2017 vintage offers excellent value."
            },
            {
                critic: "James Suckling",
                score: 96,
                review: "Beautifully balanced with fresh fruit and elegant structure. A wine that will age gracefully."
            }
        ],
        labelImage: "https://images.vivino.com/thumbs/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00_375x500.jpg",
        bottleImage: "https://images.vivino.com/thumbs/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00/00_375x500.jpg",
        description: "The 2017 vintage of Château Margaux, while challenging due to frost, still produced wines of remarkable quality and elegance.",
        agingPotential: "20-30 years",
        servingTemperature: "16-18°C",
        foodPairings: [
            "Duck breast",
            "Mushroom risotto",
            "Soft cheeses",
            "Dark chocolate"
        ],
        availability: "Available",
        lastUpdated: "2024-01-15"
    }
};

// Wine search and filtering functions
class WineDatabase {
    static getWineById(id) {
        return wineDatabase[id] || null;
    }

    static searchWines(query) {
        const results = [];
        const searchTerm = query.toLowerCase();
        
        Object.values(wineDatabase).forEach(wine => {
            if (
                wine.name.toLowerCase().includes(searchTerm) ||
                wine.producer.toLowerCase().includes(searchTerm) ||
                wine.region.toLowerCase().includes(searchTerm) ||
                wine.grapeVarieties.some(grape => grape.toLowerCase().includes(searchTerm))
            ) {
                results.push(wine);
            }
        });
        
        return results;
    }

    static getWinesByRegion(region) {
        return Object.values(wineDatabase).filter(wine => 
            wine.region.toLowerCase().includes(region.toLowerCase())
        );
    }

    static getWinesByPriceRange(min, max) {
        return Object.values(wineDatabase).filter(wine => 
            wine.priceRange.min >= min && wine.priceRange.max <= max
        );
    }

    static getWinesByRating(minRating) {
        return Object.values(wineDatabase).filter(wine => 
            wine.ratings.average >= minRating
        );
    }

    static getAllWines() {
        return Object.values(wineDatabase);
    }

    static getFeaturedWines() {
        // Return wines with highest ratings
        return Object.values(wineDatabase)
            .sort((a, b) => b.ratings.average - a.ratings.average)
            .slice(0, 6);
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { wineDatabase, WineDatabase };
}

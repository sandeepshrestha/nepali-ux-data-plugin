// ============================================================================
// NEPALI UX DATA PLUGIN - STATIC DATA GENERATION
// ============================================================================

// ============================================================================
// ENHANCED DATA GENERATION MODULES
// ============================================================================

class NepaliNameGenerator {
  private static maleNames = [
    "Sandeep",
    "Rajesh",
    "Suresh",
    "Ramesh",
    "Dinesh",
    "Bikash",
    "Prakash",
    "Ashok",
    "Suman",
    "Rajan",
    "Kamal",
    "Nabin",
    "Sagar",
    "Dipesh",
    "Mahesh",
    "Binod",
    "Arjun",
    "Krishna",
    "Shyam",
    "Hari",
    "Gopal",
    "Mohan",
    "Roshan",
    "Anil",
  ];

  private static femaleNames = [
    "Sunita",
    "Kamala",
    "Sita",
    "Rita",
    "Gita",
    "Anita",
    "Binita",
    "Sabina",
    "Purnima",
    "Sangita",
    "Sarita",
    "Nirmala",
    "Shanti",
    "Radha",
    "Maya",
    "Devi",
    "Sushila",
    "Manju",
    "Laxmi",
    "Uma",
    "Indira",
    "Rekha",
    "Sushma",
    "Prema",
  ];

  private static surnames = [
    "Shrestha",
    "Gurung",
    "Tamang",
    "Rai",
    "Limbu",
    "Magar",
    "Thapa",
    "Sharma",
    "Poudel",
    "Adhikari",
    "Khadka",
    "Karki",
    "Bhattarai",
    "Neupane",
    "Acharya",
    "Koirala",
    "Pandey",
    "Gautam",
    "Bhandari",
    "Joshi",
    "Ghimire",
    "Rijal",
    "Sapkota",
    "Dahal",
  ];

  private static middleNames = [
    "Kumar",
    "Prasad",
    "Bahadur",
    "Lal",
    "Das",
    "Kumari",
    "Raj",
    "Man",
    "Bir",
    "Ratna",
    "Chandra",
    "Surya",
    "Indra",
    "Ram",
    "Shiva",
    "Vishnu",
    "Mani",
    "Prem",
    "Ganga",
    "Saraswati",
    "Lakshmi",
  ];

  private static devanagariMap: { [key: string]: string } = {
    // Male names
    Sandeep: "सन्दीप",
    Rajesh: "राजेश",
    Suresh: "सुरेश",
    Ramesh: "रमेश",
    Dinesh: "दिनेश",
    Bikash: "बिकाश",
    Prakash: "प्रकाश",
    Ashok: "अशोक",
    Suman: "सुमन",
    Rajan: "राजन",
    Kamal: "कमल",
    Nabin: "नबिन",
    Sagar: "सागर",
    Dipesh: "दिपेश",
    Mahesh: "महेश",
    Binod: "बिनोद",
    Arjun: "अर्जुन",
    Krishna: "कृष्ण",
    Shyam: "श्याम",
    Hari: "हरि",
    Gopal: "गोपाल",
    Mohan: "मोहन",
    Roshan: "रोशन",
    Anil: "अनिल",

    // Female names
    Sunita: "सुनिता",
    Kamala: "कमला",
    Sita: "सीता",
    Rita: "रिता",
    Gita: "गीता",
    Anita: "अनिता",
    Binita: "बिनिता",
    Sabina: "सबिना",
    Purnima: "पूर्णिमा",
    Sangita: "संगीता",
    Sarita: "सरिता",
    Nirmala: "निर्मला",
    Shanti: "शान्ति",
    Radha: "राधा",
    Maya: "माया",
    Devi: "देवी",
    Sushila: "सुशिला",
    Manju: "मञ्जु",
    Laxmi: "लक्ष्मी",
    Uma: "उमा",
    Indira: "इन्दिरा",
    Rekha: "रेखा",
    Sushma: "सुष्मा",
    Prema: "प्रेमा",

    // Surnames
    Shrestha: "श्रेष्ठ",
    Gurung: "गुरुङ",
    Tamang: "तामाङ",
    Rai: "राई",
    Limbu: "लिम्बु",
    Magar: "मगर",
    Thapa: "थापा",
    Sharma: "शर्मा",
    Poudel: "पौडेल",
    Adhikari: "अधिकारी",
    Khadka: "खड्का",
    Karki: "कार्की",
    Bhattarai: "भट्टराई",
    Neupane: "न्यौपाने",
    Acharya: "आचार्य",
    Koirala: "कोइराला",
    Pandey: "पाण्डेय",
    Gautam: "गौतम",
    Bhandari: "भण्डारी",
    Joshi: "जोशी",
    Ghimire: "घिमिरे",
    Rijal: "रिजाल",
    Sapkota: "सापकोटा",
    Dahal: "दाहाल",

    // Middle names
    Kumar: "कुमार",
    Prasad: "प्रसाद",
    Bahadur: "बहादुर",
    Lal: "लाल",
    Das: "दास",
    Kumari: "कुमारी",
    Raj: "राज",
    Man: "मान",
    Bir: "बीर",
    Ratna: "रत्न",
    Chandra: "चन्द्र",
    Surya: "सूर्य",
    Indra: "इन्द्र",
    Ram: "राम",
    Shiva: "शिव",
    Vishnu: "विष्णु",
    Mani: "मणि",
    Prem: "प्रेम",
    Ganga: "गंगा",
    Saraswati: "सरस्वती",
    Lakshmi: "लक्ष्मी",
  };

  static generateName(
    gender: "male" | "female" | "neutral",
    language: "english" | "nepali",
    options?: {
      includeMiddleName?: boolean;
      nameType?: "first" | "full";
    }
  ): string {
    // Static generation only
    const firstNames =
      gender === "male"
        ? this.maleNames
        : gender === "female"
        ? this.femaleNames
        : [...this.maleNames, ...this.femaleNames];

    const firstName =
      firstNames[Math.floor(Math.random() * firstNames.length)];

    // If only first name is requested
    if (options?.nameType === "first") {
      if (language === "nepali") {
        return this.convertToDevanagari(firstName);
      }
      return firstName;
    }

    // Generate full name (default behavior)
    const surname =
      this.surnames[Math.floor(Math.random() * this.surnames.length)];

    let name = firstName;

    // Add middle name if requested
    if (options?.includeMiddleName) {
      const middleName =
        this.middleNames[Math.floor(Math.random() * this.middleNames.length)];
      name = `${firstName} ${middleName}`;
    }

    // Add surname for full name
    name = `${name} ${surname}`;

    if (language === "nepali") {
      return this.convertToDevanagari(name);
    }
    return name;
  }

  private static isDevanagari(text: string): boolean {
    // Check if text contains Devanagari characters
    return /[\u0900-\u097F]/.test(text);
  }

  private static convertToDevanagari(name: string): string {
    return name
      .split(" ")
      .map((part) => this.devanagariMap[part] || part)
      .join(" ");
  }
}

class NepaliAddressGenerator {
  private static provinces = [
    {
      name: "Koshi",
      districts: [
        "Jhapa",
        "Ilam",
        "Panchthar",
        "Taplejung",
        "Morang",
        "Sunsari",
      ],
    },
    {
      name: "Madhesh",
      districts: [
        "Saptari",
        "Siraha",
        "Dhanusha",
        "Mahottari",
        "Sarlahi",
        "Bara",
      ],
    },
    {
      name: "Bagmati",
      districts: [
        "Kathmandu",
        "Lalitpur",
        "Bhaktapur",
        "Nuwakot",
        "Rasuwa",
        "Dhading",
      ],
    },
    {
      name: "Gandaki",
      districts: ["Kaski", "Syangja", "Parbat", "Myagdi", "Baglung", "Mustang"],
    },
    {
      name: "Lumbini",
      districts: [
        "Rupandehi",
        "Kapilvastu",
        "Dang",
        "Banke",
        "Bardiya",
        "Gulmi",
      ],
    },
    {
      name: "Karnali",
      districts: ["Surkhet", "Dailekh", "Jajarkot", "Kalikot", "Jumla", "Mugu"],
    },
    {
      name: "Sudurpashchim",
      districts: [
        "Kailali",
        "Kanchanpur",
        "Doti",
        "Bajhang",
        "Bajura",
        "Achham",
      ],
    },
  ];

  private static streetNames = [
    "Buddha Marg",
    "King's Way",
    "Durbar Marg",
    "Kantipath",
    "Ring Road",
    "New Road",
    "Kamal Pokhari",
    "Maharajgunj Road",
    "Lainchaur Road",
    "Tripureshwor Road",
    "Ratna Park Road",
    "Sundhara Road",
    "Bagbazaar Road",
    "Dillibazaar Road",
    "Thapathali Road",
    "Kalimati Road",
    "Gongabu Road",
    "Balaju Road",
    "Satdobato Road",
    "Patan Road",
  ];

  private static locations: { [key: string]: string[] } = {
    Kathmandu: [
      "Thamel",
      "Baneshwor",
      "New Road",
      "Lazimpat",
      "Maharajgunj",
      "Baluwatar",
      "Putalisadak",
    ],
    Lalitpur: [
      "Patan Dhoka",
      "Jawalakhel",
      "Kupondole",
      "Sanepa",
      "Pulchowk",
      "Mangal Bazaar",
    ],
    Bhaktapur: [
      "Durbar Square",
      "Pottery Square",
      "Dattatraya Square",
      "Taumadhi Square",
    ],
    Kaski: [
      "Lakeside",
      "Mahendrapul",
      "Prithvi Chowk",
      "Bagar",
      "Damside",
      "Bindyabasini",
    ],
    Jhapa: ["Birtamod", "Damak", "Bhadrapur", "Mechinagar", "Kankai"],
    Morang: ["Biratnagar", "Urlabari", "Sundarharaicha", "Pathari"],
  };

  private static postalCodes: { [key: string]: string[] } = {
    Kathmandu: ["44600", "44601", "44602", "44603", "44604", "44605"],
    Lalitpur: ["44700", "44701", "44702", "44703"],
    Bhaktapur: ["44800", "44801", "44802"],
    Kaski: ["33700", "33701", "33702"],
    Jhapa: ["57200", "57201", "57202"],
    Morang: ["56600", "56601", "56602"],
    Sunsari: ["56900", "56901"],
    Ilam: ["57300", "57301"],
    Rupandehi: ["32900", "32901"],
    Chitwan: ["44200", "44201"],
    Banke: ["21900", "21901"],
  };

  static generateAddress(provinceFilter?: string): string {
    // Static generation only
    let availableProvinces = this.provinces;
    if (provinceFilter) {
      availableProvinces = this.provinces.filter(
        (p) => p.name === provinceFilter
      );
    }

    const province =
      availableProvinces[
        Math.floor(Math.random() * availableProvinces.length)
      ];
    const district =
      province.districts[
        Math.floor(Math.random() * province.districts.length)
      ];
    const locations = this.locations[district] || ["Center"];
    const location = locations[Math.floor(Math.random() * locations.length)];
    
    // Generate house number
    const houseNumber = Math.floor(Math.random() * 999) + 1;
    
    // Get street name
    const streetName = this.streetNames[Math.floor(Math.random() * this.streetNames.length)];
    
    // Get postal code
    const postalCodes = this.postalCodes[district] || ["44600"];
    const postalCode = postalCodes[Math.floor(Math.random() * postalCodes.length)];

    return `${houseNumber} ${streetName}, ${location}, ${district}, ${postalCode}, Nepal`;
  }
}

class NepaliContactGenerator {
  static generatePhone(type: "mobile" | "landline"): string {
    if (type === "mobile") {
      const prefixes = ["98", "97", "96", "95", "94", "86", "85", "84"];
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      const number = Math.floor(Math.random() * 10000000)
        .toString()
        .padStart(8, "0");
      return `+977-${prefix}${number}`;
    } else {
      const areaCodes = ["1", "21", "25", "61", "71", "81", "91"];
      const areaCode = areaCodes[Math.floor(Math.random() * areaCodes.length)];
      const number = Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(7, "0");
      return `+977-${areaCode}-${number}`;
    }
  }

  static generateCurrency(amount?: number): string {
    const value = amount || Math.floor(Math.random() * 100000) + 100;
    const formatted = value.toLocaleString("en-IN");
    return `Rs. ${formatted}`;
  }

  static generateDate(format: "ad" | "bs" | "both"): string {
    const date = new Date();
    const adDate = date.toLocaleDateString("en-GB");

    if (format === "ad") return adDate;
    if (format === "bs") {
      const bsYear = date.getFullYear() + 57;
      const bsMonth = Math.floor(Math.random() * 12) + 1;
      const bsDay = Math.floor(Math.random() * 30) + 1;
      return `${bsYear}/${bsMonth.toString().padStart(2, "0")}/${bsDay
        .toString()
        .padStart(2, "0")}`;
    }
    const bsYear = date.getFullYear() + 57;
    return `${adDate} (BS: ${bsYear}/04/05)`;
  }
}

class NepaliDateGenerator {
  private static nepaliMonths = [
    "बैसाख", "जेठ", "असार", "साउन", "भदौ", "असोज",
    "कार्तिक", "मंसिर", "पुष", "माघ", "फागुन", "चैत्र"
  ];

  private static englishMonths = [
    "Baisakh", "Jestha", "Ashar", "Shrawan", "Bhadra", "Ashoj",
    "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"
  ];

  private static nepaliNumbers = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

  private static convertToNepaliNumber(num: number): string {
    return num.toString().split('').map(digit => this.nepaliNumbers[parseInt(digit)]).join('');
  }

  static generateDate(
    language: "nepali" | "english",
    format: "long" | "short" | "numeric"
  ): string {
    // Generate a random Nepali date (BS)
    const currentYear = new Date().getFullYear();
    const bsYear = currentYear + 56 + Math.floor(Math.random() * 3); // Current BS year ± some variation
    const month = Math.floor(Math.random() * 12);
    const day = Math.floor(Math.random() * 30) + 1;

    if (language === "nepali") {
      if (format === "long") {
        // Format: "२०७८ साल असर १५ गते"
        const nepaliYear = this.convertToNepaliNumber(bsYear);
        const nepaliDay = this.convertToNepaliNumber(day);
        return `${nepaliYear} साल ${this.nepaliMonths[month]} ${nepaliDay} गते`;
      } else if (format === "short") {
        // Format: "असर १५, २०७८"
        const nepaliYear = this.convertToNepaliNumber(bsYear);
        const nepaliDay = this.convertToNepaliNumber(day);
        return `${this.nepaliMonths[month]} ${nepaliDay}, ${nepaliYear}`;
      } else {
        // Format: "२०७८/०४/१५"
        const nepaliYear = this.convertToNepaliNumber(bsYear);
        const nepaliMonth = this.convertToNepaliNumber(month + 1);
        const nepaliDay = this.convertToNepaliNumber(day);
        return `${nepaliYear}/${nepaliMonth.padStart(2, '०')}/${nepaliDay.padStart(2, '०')}`;
      }
    } else {
      if (format === "long") {
        // Format: "15 Ashar 2078 BS"
        return `${day} ${this.englishMonths[month]} ${bsYear} BS`;
      } else if (format === "short") {
        // Format: "Ashar 15, 2078"
        return `${this.englishMonths[month]} ${day}, ${bsYear}`;
      } else {
        // Format: "2078/04/15"
        return `${bsYear}/${(month + 1).toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;
      }
    }
  }
}

// ============================================================================
// FIGMA API INTEGRATION
// ============================================================================

class FigmaContentInserter {
  static async insertText(
    content: string,
    nodes?: readonly SceneNode[]
  ): Promise<void> {
    const targetNodes = nodes || figma.currentPage.selection;

    if (targetNodes.length === 0) {
      const textNode = figma.createText();
      await figma.loadFontAsync({ family: "Inter", style: "Regular" });
      textNode.characters = content;
      textNode.x = figma.viewport.center.x;
      textNode.y = figma.viewport.center.y;
      figma.currentPage.appendChild(textNode);
      figma.currentPage.selection = [textNode];
      figma.viewport.scrollAndZoomIntoView([textNode]);
    } else {
      for (const node of targetNodes) {
        if (node.type === "TEXT") {
          await figma.loadFontAsync(node.fontName as FontName);
          (node as TextNode).characters = content;
        }
      }
    }
  }

  static async insertImage(
    imageUrl: string,
    nodes?: readonly SceneNode[]
  ): Promise<void> {
    try {
      const targetNodes = nodes || figma.currentPage.selection;

      if (targetNodes.length === 0) {
        const rect = figma.createRectangle();
        rect.resize(200, 200);
        rect.x = figma.viewport.center.x;
        rect.y = figma.viewport.center.y;
        rect.fills = [{ type: "SOLID", color: { r: 0.8, g: 0.8, b: 0.8 } }];
        figma.currentPage.appendChild(rect);
        figma.currentPage.selection = [rect];
        figma.viewport.scrollAndZoomIntoView([rect]);
      }
    } catch (error) {
      console.error("Failed to insert image:", error);
    }
  }

  static async bulkInsert(
    contentArray: string[],
    type: "text" | "image"
  ): Promise<void> {
    const selection = figma.currentPage.selection;

    if (selection.length === 0) {
      for (let i = 0; i < contentArray.length; i++) {
        const content = contentArray[i];
        if (type === "text") {
          const textNode = figma.createText();
          await figma.loadFontAsync({ family: "Inter", style: "Regular" });
          textNode.characters = content;
          textNode.x = figma.viewport.center.x;
          textNode.y = figma.viewport.center.y + i * 40;
          figma.currentPage.appendChild(textNode);
        }
      }
      figma.currentPage.selection = figma.currentPage.children.slice(-contentArray.length) as SceneNode[];
      figma.viewport.scrollAndZoomIntoView(figma.currentPage.selection);
    } else {
      for (
        let i = 0;
        i < Math.min(selection.length, contentArray.length);
        i++
      ) {
        const node = selection[i];
        const content = contentArray[i];
        if (type === "text" && node.type === "TEXT") {
          await figma.loadFontAsync(node.fontName as FontName);
          (node as TextNode).characters = content;
        }
      }
    }
  }

}

// ============================================================================
// MAIN PLUGIN LOGIC
// ============================================================================

figma.showUI(__html__, { width: 400, height: 600 });

interface PluginMessage {
  type: string;
  gender?: string;
  language?: string;
  province?: string;
  phoneType?: string;
  amount?: number;
  format?: string;
  imageUrl?: string;
  contentType?: string;
  count?: number;
  includeMiddleName?: boolean;
  nameType?: string;
  insert?: boolean;
  content?: string;
}

figma.ui.onmessage = async (msg: PluginMessage) => {
  try {
    switch (msg.type) {
      case "generate-name": {
        const selection = figma.currentPage.selection;
        const textNodes = selection.filter(node => node.type === "TEXT") as TextNode[];
        
        if (textNodes.length === 0) {
          // No text layers selected, create a new one
          const name = NepaliNameGenerator.generateName(
            msg.gender as "male" | "female" | "neutral",
            msg.language as "english" | "nepali",
            {
              includeMiddleName: msg.includeMiddleName,
              nameType: msg.nameType as "first" | "full"
            }
          );
          await FigmaContentInserter.insertText(name);
        } else {
          // Update all selected text layers
          for (const textNode of textNodes) {
            const name = NepaliNameGenerator.generateName(
              msg.gender as "male" | "female" | "neutral",
              msg.language as "english" | "nepali",
              {
                includeMiddleName: msg.includeMiddleName,
                nameType: msg.nameType as "first" | "full"
              }
            );
            await figma.loadFontAsync(textNode.fontName as FontName);
            textNode.characters = name;
          }
          figma.notify(`Updated ${textNodes.length} text layer${textNodes.length > 1 ? 's' : ''}`);
        }
        break;
      }

      case "generate-address": {
        const selection = figma.currentPage.selection;
        const textNodes = selection.filter(node => node.type === "TEXT") as TextNode[];
        
        if (textNodes.length === 0) {
          // No text layers selected, create a new one
          const address = NepaliAddressGenerator.generateAddress(msg.province);
          await FigmaContentInserter.insertText(address);
        } else {
          // Update all selected text layers
          for (const textNode of textNodes) {
            const address = NepaliAddressGenerator.generateAddress(msg.province);
            await figma.loadFontAsync(textNode.fontName as FontName);
            textNode.characters = address;
          }
          figma.notify(`Updated ${textNodes.length} text layer${textNodes.length > 1 ? 's' : ''}`);
        }
        break;
      }
      case "generate-nepali-date": {
        const selection = figma.currentPage.selection;
        const textNodes = selection.filter(node => node.type === "TEXT") as TextNode[];
        
        if (textNodes.length === 0) {
          // No text layers selected, create a new one
          const date = NepaliDateGenerator.generateDate(
            msg.language as "nepali" | "english",
            msg.format as "long" | "short" | "numeric"
          );
          await FigmaContentInserter.insertText(date);
        } else {
          // Update all selected text layers
          for (const textNode of textNodes) {
            const date = NepaliDateGenerator.generateDate(
              msg.language as "nepali" | "english",
              msg.format as "long" | "short" | "numeric"
            );
            await figma.loadFontAsync(textNode.fontName as FontName);
            textNode.characters = date;
          }
          figma.notify(`Updated ${textNodes.length} text layer${textNodes.length > 1 ? 's' : ''}`);
        }
        break;
      }

      case "generate-phone": {
        const phone = NepaliContactGenerator.generatePhone(
          msg.phoneType as "mobile" | "landline"
        );
        if (msg.insert) {
          await FigmaContentInserter.insertText(phone);
        } else {
          figma.ui.postMessage({ type: "phone-generated", content: phone });
        }
        break;
      }

      case "generate-currency": {
        const currency = NepaliContactGenerator.generateCurrency(msg.amount);
        if (msg.insert) {
          await FigmaContentInserter.insertText(currency);
        } else {
          figma.ui.postMessage({
            type: "currency-generated",
            content: currency,
          });
        }
        break;
      }

      case "generate-date": {
        const date = NepaliContactGenerator.generateDate(
          msg.format as "ad" | "bs" | "both"
        );
        if (msg.insert) {
          await FigmaContentInserter.insertText(date);
        } else {
          figma.ui.postMessage({ type: "date-generated", content: date });
        }
        break;
      }

      case "insert-image":
        await FigmaContentInserter.insertImage(msg.imageUrl || "");
        break;

      case "insert-text":
        await FigmaContentInserter.insertText(msg.content || "");
        break;


      case "close-plugin":
        figma.closePlugin();
        break;
    }
  } catch (error) {
    console.error("Plugin error:", error);
    figma.notify("An error occurred. Please try again.");
  }
};

figma.on("selectionchange", () => {
  const selection = figma.currentPage.selection;
  const selectionInfo = {
    count: selection.length,
    types: selection.map((node) => node.type),
    hasText: selection.some((node) => node.type === "TEXT"),
  };
  figma.ui.postMessage({ type: "selection-changed", selection: selectionInfo });
});

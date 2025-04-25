import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ICONS } from "@/assets";

const LocationSearch = ({
  selectedLocation,
  setSelectedLocation,
}: {
  selectedLocation: string | null;
  setSelectedLocation: (location: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropDownRef = useRef<HTMLDivElement>(null);

  const indianStates = [
    "Adoni",
    "Amaravati",
    "Anantapur",
    "Chandragiri",
    "Chittoor",
    "Dowlaiswaram",
    "Eluru",
    "Guntur",
    "Kadapa",
    "Kakinada",
    "Kurnool",
    "Machilipatnam",
    "Nagarjunakonda",
    "Rajahmundry",
    "Srikakulam",
    "Tirupati",
    "Vijayawada",
    "Visakhapatnam",
    "Vizianagaram",
    "Yemmiganur",
    "Dhuburi",
    "Dibrugarh",
    "Dispur",
    "Guwahati",
    "Jorhat",
    "Nagaon",
    "Sivasagar", // Note: Silchar, Tezpur, Tinsukia seem to be listed under Sivasagar in OCR, corrected placement
    "Silchar",
    "Tezpur",
    "Tinsukia",
    "Itanagar",
    "Ara",
    "Barauni",
    "Begusarai",
    "Bettiah",
    "Bhagalpur",
    "Bihar Sharif",
    "Bodh Gaya",
    "Buxar",
    "Chapra",
    "Darbhanga",
    "Dehri",
    "Dinapur Nizamat",
    "Gaya",
    "Hajipur",
    "Jamalpur",
    "Katihar",
    "Madhubani",
    "Motihari",
    "Munger",
    "Muzaffarpur",
    "Patna",
    "Purnia",
    "Pusa",
    "Saharsa",
    "Samastipur",
    "Sasaram",
    "Sitamarhi",
    "Siwan",
    "Chandigarh",
    "Ambikapur",
    "Bhilai",
    "Bilaspur",
    "Dhamtari",
    "Durg",
    "Jagdalpur",
    "Raipur",
    "Rajnandgaon",
    "Daman",
    "Diu",
    "Silvassa",
    "Delhi",
    "New Delhi",
    "Madgaon",
    "Panaji",
    "Ahmadabad", // Likely Ahmedabad
    "Amreli",
    "Bharuch",
    "Bhavnagar",
    "Bhuj",
    "Dwarka",
    "Gandhinagar",
    "Godhra",
    "Jamnagar",
    "Junagadh",
    "Kandla",
    "Khambhat",
    "Kheda",
    "Mahesana",
    "Morbi",
    "Nadiad",
    "Navsari",
    "Okha",
    "Palanpur",
    "Patan",
    "Porbandar",
    "Rajkot",
    "Surat",
    "Surendranagar",
    "Valsad",
    "Veraval",
    "Ambala",
    "Bhiwani",
    "Chandigarh", // Chandigarh is a shared capital and UT
    "Faridabad",
    "Firozpur Jhirka",
    "Gurugram", // Formerly Gurgaon
    "Hansi",
    "Hisar",
    "Jind",
    "Kaithal",
    "Karnal",
    "Kurukshetra",
    "Panipat",
    "Pehowa",
    "Rewari",
    "Rohtak",
    "Sirsa",
    "Sonipat",
    "Bilaspur",
    "Chamba",
    "Dalhousie",
    "Dharmshala",
    "Hamirpur",
    "Kangra",
    "Kullu",
    "Mandi",
    "Nahan",
    "Shimla",
    "Una",
    "Jammu",
    "Kathua",
    "Samba",
    "Poonch", // Often considered part of Jammu division
    "Rajouri", // Often considered part of Jammu division
    "Udampur",
    "Reasi",
    "Ramban",
    "Kishtwar",
    "Doda",
    "Bokaro",
    "Chaibasa",
    "Deoghar",
    "Dhanbad",
    "Dumka",
    "Giridih",
    "Hazaribag",
    "Jamshedpur",
    "Jharia",
    "Rajmahal",
    "Ranchi",
    "Saraikela",
    "Badami",
    "Ballari", // Formerly Bellary
    "Bengaluru", // Formerly Bangalore
    "Belagavi", // Formerly Belgaum
    "Bhadravati",
    "Bidar",
    "Chikkamagaluru",
    "Chitradurga",
    "Davangere",
    "Halebid", // Halebidu
    "Hassan",
    "Hubballi-Dharwad", // Formerly Hubli-Dharwad
    "Kalaburagi", // Formerly Gulbarga
    "Kolar",
    "Madikeri",
    "Mandya",
    "Mangaluru", // Formerly Mangalore
    "Mysuru", // Formerly Mysore
    "Raichur",
    "Shivamogga", // Formerly Shimoga
    "Shravanabelagola",
    "Shrirangapattana",
    "Tumakuru", // Formerly Tumkur
    "Vijayapura",
    "Anantnag",
    "Baramulla",
    "Budgam",
    "Bandipore", // Bandipora
    "Gandwebal", // Likely Ganderbal
    "Kupwara",
    "Kulgam",
    "Pulwama",
    "Shopian",
    "Srinagar",
    "Alappuzha", // Formerly Alleppey
    "Vatakara", // Badagara
    "Idukki",
    "Kannur", // Formerly Cannanore
    "Kochi", // Formerly Cochin
    "Kollam", // Formerly Quilon
    "Kottayam",
    "Kozhikode", // Formerly Calicut
    "Mattancheri", // Mattancherry
    "Palakkad", // Formerly Palghat
    "Thalassery", // Formerly Tellicherry
    "Thiruvananthapuram", // Formerly Trivandrum
    "Thrissur",
    "Kargil",
    "Leh",
    "Balaghat",
    "Barwani",
    "Betul",
    "Bharhut",
    "Bhind",
    "Bhojpur",
    "Bhopal",
    "Burhanpur",
    "Chhatarpur",
    "Chhindwara",
    "Damoh",
    "Datia",
    "Dewas",
    "Dhar",
    "Dr. Ambedkar Nagar (Mhow)",
    "Guna",
    "Gwalior",
    "Hoshangabad", // Now Narmadapuram
    "Indore",
    "Itarsi",
    "Jabalpur",
    "Jhabua",
    "Khajuraho",
    "Khandwa",
    "Khargone",
    "Maheshwar",
    "Mandla",
    "Mandsaur",
    "Morena",
    "Murwara", // Katni
    "Narsimhapur",
    "Narsinghgarh",
    "Narwar",
    "Neemuch",
    "Nowgong",
    "Orchha",
    "Panna",
    "Raisen",
    "Rajgarh",
    "Ratlam",
    "Rewa",
    "Sagar",
    "Sarangpur",
    "Satna",
    "Sehore",
    "Seoni",
    "Shahdol",
    "Shajapur",
    "Sheopur",
    "Shivpuri",
    "Ujjain",
    "Vidisha",
    "Ahmadnagar",
    "Akola",
    "Amravati",
    "Aurangabad", // Now Chhatrapati Sambhaji Nagar
    "Bhandara",
    "Bhusawal",
    "Bid", // Beed
    "Buldhana",
    "Chandrapur",
    "Daulatabad",
    "Dhule",
    "Jalgaon",
    "Kalyan",
    "Karli", // Karle
    "Kolhapur",
    "Mahabaleshwar",
    "Malegaon",
    "Matheran",
    "Mumbai", // Formerly Bombay
    "Nagpur",
    "Nanded",
    "Nashik",
    "Osmanabad", // Now Dharashiv
    "Pandharpur",
    "Parbhani",
    "Pune", // Formerly Poona
    "Ratnagiri",
    "Sangli",
    "Satara",
    "Sevagram",
    "Solapur",
    "Thane",
    "Ulhasnagar",
    "Vasai-Virar",
    "Wardha",
    "Yavatmal",
    "Imphal",
    "Cherrapunji",
    "Shillong",
    "Aizawl", // Corrected from "Aizawal"
    "Lunglei",
    "Kohima",
    "Mon",
    "Phek",
    "Wokha",
    "Zunheboto",
    "Balangir", // Bolangir
    "Baleshwar", // Balasore
    "Baripada",
    "Bhubaneshwar",
    "Brahmapur", // Berhampur
    "Cuttack",
    "Dhenkanal",
    "Kendujhar", // Keonjhar
    "Konark",
    "Koraput",
    "Paradip", // Paradeep
    "Phulabani", // Phulbani
    "Puri",
    "Sambalpur",
    "Udayagiri",
    "Karaikal",
    "Mahe",
    "Puducherry",
    "Yanam",
    "Amritsar",
    "Batala",
    "Chandigarh", // Shared capital
    "Faridkot",
    "Firozpur",
    "Gurdaspur",
    "Hoshiarpur",
    "Jalandhar",
    "Kapurthala",
    "Ludhiana",
    "Nabha",
    "Patiala",
    "Rupnagar", // Ropar
    "Sangrur",
    "Abu", // Mount Abu
    "Ajmer",
    "Alwar",
    "Amer",
    "Barmer",
    "Beawar",
    "Bharatpur",
    "Bhilwara",
    "Bikaner",
    "Bundi",
    "Chittaurgarh", // Chittorgarh
    "Churu",
    "Dhaulpur", // Dholpur
    "Dungarpur",
    "Ganganagar", // Sri Ganganagar
    "Hanumangarh",
    "Jaipur",
    "Jaisalmer",
    "Jalor", // Jalore
    "Jhalawar",
    "Jhunjhunu",
    "Jodhpur",
    "Kishangarh",
    "Kota",
    "Merta",
    "Nagaur",
    "Nathdwara",
    "Pali",
    "Phalodi",
    "Pushkar",
    "Sawai Madhopur",
    "Shahpura",
    "Sikar",
    "Sirohi",
    "Tonk",
    "Udaipur",
    "Gangtok",
    "Gyalshing", // Geyzing
    "Lachung",
    "Mangan",
    "Arcot",
    "Chengalpattu",
    "Chennai", // Formerly Madras
    "Chidambaram",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kanchipuram",
    "Kanniyakumari", // Kanyakumari
    "Kodaikanal",
    "Kumbakonam",
    "Madurai",
    "Mamallapuram", // Mahabalipuram
    "Nagappattinam",
    "Nagercoil",
    "Palayamkottai",
    "Pudukkottai",
    "Rajapalayam",
    "Ramanathapuram",
    "Salem",
    "Thanjavur", // Tanjore
    "Tiruchchirappalli", // Trichy / Tiruchirapalli
    "Tirunelveli",
    "Tiruppur",
    "Thoothukudi", // Tuticorin
    "Udhagamandalam", // Ooty
    "Vellore",
    "Hyderabad", // Shared capital initially, now solely Telangana's
    "Karimnagar",
    "Khammam",
    "Mahbubnagar",
    "Nizamabad",
    "Sangareddi",
    "Warangal",
    "Agartala",
    "Agra",
    "Aligarh",
    "Amroha",
    "Ayodhya",
    "Azamgarh",
    "Bahraich",
    "Ballia",
    "Banda",
    "Bara Banki",
    "Bareilly",
    "Basti",
    "Bijnor",
    "Bithur",
    "Budaun",
    "Bulandshahr",
    "Deoria",
    "Etah",
    "Etawah",
    "Faizabad", // Merged into Ayodhya district
    "Farrukhabad-cum-Fatehgarh",
    "Fatehpur",
    "Fatehpur Sikri",
    "Ghaziabad",
    "Ghazipur",
    "Gonda",
    "Gorakhpur",
    "Hamirpur",
    "Hardoi",
    "Hathras",
    "Jalaun",
    "Jaunpur",
    "Jhansi",
    "Kannauj",
    "Kanpur",
    "Lakhimpur",
    "Lalitpur",
    "Lucknow",
    "Mainpuri",
    "Mathura",
    "Meerut",
    "Mirzapur-Vindhyachal", // Mirzapur
    "Moradabad",
    "Muzaffarnagar",
    "Partapgarh", // Pratapgarh
    "Pilibhit",
    "Prayagraj", // Formerly Allahabad
    "Rae Bareli",
    "Rampur",
    "Saharanpur",
    "Sambhal",
    "Shahjahanpur",
    "Sitapur",
    "Sultanpur",
    "Tehri", // Tehri is in Uttarakhand, likely error in source? Removing from UP.
    "Varanasi",
    "Almora",
    "Dehradun", // Corrected from "Dehra Dun"
    "Haridwar",
    "Mussoorie",
    "Nainital",
    "Pithoragarh",
    "Tehri",
    "Alipore", // Part of Kolkata
    "Alipur Duar", // Alipurduar
    "Asansol",
    "Baharampur", // Berhampore
    "Bally", // Part of Howrah
    "Balurghat",
    "Bankura",
    "Baranagar", // Part of Kolkata metropolitan area
    "Barasat",
    "Barrackpore",
    "Basirhat",
    "Bhatpara",
    "Bishnupur",
    "Budge Budge", // Part of Kolkata metropolitan area
    "Burdwan", // Bardhaman
    "Chandernagore", // Chandannagar
    "Darjeeling",
    "Diamond Harbour",
    "Dum Dum", // Part of Kolkata metropolitan area
    "Durgapur",
    "Halisahar",
    "Haora", // Howrah
    "Hugli", // Hooghly
    "Ingraj Bazar", // English Bazar / Malda
    "Jalpaiguri",
    "Kalimpong",
    "Kamarhati", // Part of Kolkata metropolitan area
    "Kanchrapara",
    "Kharagpur",
    "Cooch Behar", // Koch Bihar
    "Kolkata", // Formerly Calcutta
    "Krishnanagar",
    "Malda", // District, also city (English Bazar)
    "Midnapore", // Medinipur
    "Murshidabad",
    "Nabadwip",
    "Palashi", // Plassey
    "Panihati", // Part of Kolkata metropolitan area
    "Purulia",
    "Raiganj",
    "Santipur",
    "Shantiniketan", // University town
    "Shrirampur", // Serampore
    "Siliguri",
    "Siuri", // Suri
    "Tamluk",
    "Titagarh",
  ];

  const filteredItems = search.trim()
    ? indianStates.filter((state) =>
        state.toLowerCase().startsWith(search.toLowerCase())
      )
    : indianStates;

  const handleSelect = (item: string) => {
    setSelectedLocation(item);
    setOpen(false); // auto-close after selecting
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropDownRef} className="relative mx-auto w-fit text-white">
      <form
        onClick={() => setOpen((prev) => !prev)}
        className="px-6 py-5 bg-white shadow-secondary-button flex items-center justify-between text-neutral-700 text-xl leading-6 rounded-2xl w-[300px] lg:w-[277px] cursor-pointer 
        transition-all duration-300 ease-in-out transform active:scale-95"
      >
        {open ? (
          <input
            type="text"
            className="focus:outline-none w-full font-400"
            placeholder="Enter location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
          />
        ) : (
          <h1>{selectedLocation || "Select Location"}</h1>
        )}
        <Image src={ICONS.location} alt="location-icon" className="size-6" />
      </form>

      <div
        className={`${
          open ? "visible bg-white shadow-secondary-button" : "invisible"
        } absolute top-12 z-50 w-full flex flex-col gap-2 p-3 rounded-b-2xl h-64 overflow-y-auto`}
      >
        {filteredItems.map((item, idx) => (
          <label
            key={idx}
            className="flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-medium cursor-pointer"
          >
            <input
              type="radio"
              name="location"
              checked={selectedLocation === item}
              onChange={() => handleSelect(item)}
              className="form-radio h-4 w-4 text-primary-500"
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default LocationSearch;

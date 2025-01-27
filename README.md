# iws.mx-dnd
A copy of the output from Sheep-y's 4e Compendium Downloader, with various new fixes.

### Overview of the 4e Data and Application

You’ve got a big project here containing D&D 4e reference data. The **main** things to recall:

1. **Root Layout**  
   - There’s a large `index.js` (25k+ lines) in the root directory. This file is a “phrase → categoryID” mapping, used for global searching.  
   - A `catalog.js` that just shows how many total items are in each category (like `"power": 9409, "monster": 5326, …"`).  
   - A `4e_database_files` folder with subdirectories for each category (e.g. `power`, `feat`, `monster`, etc.).  
     - Each category folder typically has `_index.js`, `_listing.js`, plus multiple `data#.js` files.  

2. **How the App Loads Data**  
   - It uses **JSONP**. Each `.js` file calls something like `od.reader.jsonp_data_index(...)` or `od.reader.jsonp_data_listing(...)`.  
   - **`_index.js`** (and `data#.js` in the same folder) define an **object** of ID→description, e.g.:
     ```js
     od.reader.jsonp_data_index(20130616, "power", {
       "power5327": "Full HTML content or text for Veil of the Dragon",
       "power4128": "Healing Infusion text…",
       ...
     })
     ```
   - **`_listing.js`** calls `od.reader.jsonp_data_listing(...)`, typically an **array** or two arrays: first for columns, second for data rows:
     ```js
     od.reader.jsonp_data_listing(20130616, "power", ["ID","Name","Type","Level"], [
       ["power5327","Veil of the Dragon","Daily","Attack"],
       ...
     ])
     ```
   - The front-end code (like `od.action.list` and `od.action.view`) will dynamically load these files and parse the JSONP calls to get item data.

3. **Finding an Item** (Manual Workflow)  
   - Check `index.js` for a phrase. For example, searching for `"veil of the dragon"` might yield `"veil of the dragon": "power5327",`.  
   - That means the ID is `power5327`, and the category is presumably `power`.  
   - Go into `4e_database_files/power/` and look in `_index.js`, `data0.js`, `data1.js`, etc. for the line `"power5327": "some text"`. That’s the actual content.  
   - If you also want to see if it’s in a listing table, check `_listing.js` for a row `[ "power5327", "Veil of the Dragon", ... ]`.

4. **Edits & Potential Pitfalls**  
   - The data is not pure JSON—**it’s JSONP**. You can’t just do a `JSON.parse()`. You have to parse around the function wrappers (`od.reader.jsonp_data_index(...)`).  
   - If you do big transformations (like auto-rewrite), watch out for losing the original formatting or line order.  
   - `index.js` is huge, so find a good strategy for searching it. Usually you do “Find in Files” or a small script to locate lines matching `"veil of the dragon": "powerxxxx"`.

5. **CLI Tools** (Reminders)  
   - You experimented with a script (e.g., `search.js`) to do partial or full parse of these files to locate references.  
   - The safest approach for **search** is either:
     1. Read `index.js` line by line for `"phrase": "id"`.  
     2. Then read the relevant category files for `"id": "description"` lines if needed.  
   - `_listing.js` can be more complicated because of `[["id", "Name", ...], ...]`. You’d parse it differently if you want to see the listing references.

6. **Category & ID Conventions**  
   - Typically `power` IDs are like `power5327`. A “feat” might be `feat123`.  
   - You figure out the category by stripping the alphabetical prefix from the ID.  

7. **Key Application Scripts**  
   - `od.action.list` manages listing, searching, pagination.  
   - `od.action.view` manages detail view of a single item (like `?view=power5327`).  
   - They rely on `od.search` and `od.data` modules behind the scenes to load JSONP and parse it.

### Quick Step-by-Step (Re-Remember)

1. **Need to see if an item is in the data**?  
   - Check root `index.js` for the phrase → ID.  
   - Check `4e_database_files/<category>/(_index|dataN).js` for that `"ID": ...`.

2. **Need to do a big fix**?  
   - Possibly do a script or manual “find in files” to locate every instance.  
   - Make sure not to break the `od.reader.jsonp_...` function wrappers or quotes.  

3. **Be Wary**  
   - Multi-line arrays in `_listing.js` might break naive line-based parsing.  
   - If you only do manual edits, no big deal—just watch out for trailing commas, etc.

This note is mostly for me to recall the entire structure without re-examining the code from scratch. It’s a JSONP-based data set with many subdirectories, and `index.js` is the global phrase→ID map for searching.  

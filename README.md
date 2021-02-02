#### Neighborhood Nexus: Assistant Full Stack Developer Orientation
## Exercise 2: Map Makinhg

### Description
The purpose of this exercise is to demonstrate simple map making using [React-Leaflet.js](https://react-leaflet.js.org/)  and the ability to use the React Hooks ```useState()``` and ```useEffect()``` to dynamically render GeoJSON returned via API.  The final result should be a working single page application which allows the user to select a map geography to be dislpayed on full page map.

### Getting Started
1. Clone repo to your a local directory.
2. Create a new branch called "[Your Name]"
3. Run ```npm install```
 
### Template and Instructions for Development
![template image](./template/template.png)
1. Map Container 
    * Import ```MapContainer``` and  ```TileLayer``` components from ```react-leaflet``` npm package.
    * Nest  ```TileLayer``` within  ```MapContainer```
    * Import ```config``` from  from ```./config.json```
2. Geography Selector
     * Import and use ```<Dropdown selection/>``` component from ```semantic-ui-react``` npm package.
    * Make API call using selected option. 
    * Each row should be a record in the ```features``` array in the returned JSON.
    * Each column should be a field in the ```fields``` array in the returned JSON.
    * The body of the table should be scrollable within its container.
    * The header should be fixed.  To save you time, here is the CSS for a sticky header row:

      ```
      .header-row {
        position: sticky !important;
        top: 0;
        z-index: 2;
      }
      ```
3. Dropdown for choosing a field by which to filter table (rendered conditionally to wheter data is returned)
    * Import and use ```<Dropdown selection/>``` component from ```semantic-ui-react``` npm package.
    * The options in this dropdown should simply be a list of the fields represented in the data, found in the ```fields``` array of the returned JSON.
4. Dropdown or Input fields to set the value(s) for filtering the data (rendered conditionally to whether a "Filter By" option has been chosen)
    * If the data type of the "Filter By" field is a string, import and use ```<Dropdown multiple/>``` component from ```semantic-ui-react``` npm package.
      * The options should a <u>deduplicated</u> list of all the  values for the selected "Filter By" field.
    * If the data type of the "Filter By" field is an integer, import and use ```<Input/>``` component from ```semantic-ui-react``` npm package to set <u>both</u> a <b>minimum</b> and <b>maximum</b> value.
      * The initial values should be the min and max values of the field for the entire dataset.
    * Changing these values should dynamically filter the table.
5. Header cells by the associated column when clicked
    * The first click should sort the rows from lowest-to-highest.
    * The second click should sort the rows from highest-to-lowest.
    * The third click should return the rows to the default order.
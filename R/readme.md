Last updated: Feb 12th 2024

## Files

Raw data is `Grants_2008_2022.xlsx`

`output/valid_country_names.csv` is a lookup file for manually cleaned country names

## Scripts

To clean and prepare for visualisations, run `R/clean_data.R` (exports data to `R/output`): Loads data from all sheets of the raw excel file, assigns easier column names, unifies spelling of countries and beneficiaries and looks for keywords in the project descriptions/names. Then, the cleaned data is aggregated and exported in different ways for the visualisations.

Code for visualisations in folder `d3`.


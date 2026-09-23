# T01_EnergyWebsite

## Data Story

**Audience:** Households and bill-conscious consumers shopping for a new television. They
are not technical, are shopping under cost-of-living pressure, and typically compare a
handful of models (2–3) before buying rather than analysing the full market.

**Their interest:** This audience doesn't care about kWh figures in the abstract — they
care about what a TV will actually cost them to run, and whether common assumptions they
bring to the purchase (bigger screen = more expensive to run, premium technology = more
expensive to run) are actually true. The visualisations on this site are built to answer
those specific questions, not to present the full dataset for its own sake.

**The story told:** Using the cleaned dataset of currently available televisions, this
site shows that screen size alone does not reliably predict annual running cost — some
larger LED models cost more to run per year than smaller OLED or QLED models. The
`televisions.html` page breaks running cost down by display technology so shoppers can see
where the real cost differences come from, then highlights currently available models that
offer strong running-cost value at common screen sizes.

## About the Data

### Data source
The dataset used is the Television CSV file from the Energy Rating for Household Appliances 
dataset, published by the Australian Government on 
data.gov.au: https://data.gov.au/data/dataset/energy-rating-for-household-appliances [Downloaded on: 10 Sep. 2026].

### Data processing
The raw dataset was cleaned using a KNIME workflow (see `T01(b)` in this repository)
before being used in the visualisations:

1. **CSV Reader** — loaded the raw dataset.
2. **Column Filter** — removed columns containing missing/incomplete values.
3. **Sorter** — sorted rows by `model.no`, then `submit_id`.
4. **Duplicate Row Filter** — removed duplicate entries based on `model.no`.
5. **Row Filter** — retained only rows where `Availability status = Available`, so the
   site only shows televisions a shopper could actually buy.

### Privacy
The dataset contains product registration information (model, brand, screen size,
technology, energy rating, etc.) submitted by manufacturers/suppliers for regulatory
compliance. It does not contain any personal or personally identifiable information about
individuals, so no personal privacy risks arise from its use on this site.

### Accuracy and limitations
- Registered energy consumption figures are derived from standardised laboratory test
  conditions, not real-world household usage, so actual running cost will vary with
  screen brightness, usage hours, and viewing habits.
- The dataset reflects a snapshot at the time of download; models may be discontinued,
  re-priced, or newly released after that date, and the `Availability status` field may
  no longer be current by the time a reader visits the site.

### Ethics
- The dataset is publicly published by Australia Government on data.gov.au for the explicit purpose of
  helping consumers compare products, so its use here is consistent with its intended
  purpose.
- Charts and running-cost figures are presented with their basis (test conditions,
  conversion rate/date) stated, rather than implying real-world guarantees, to avoid
  misleading the audience.
- No brand is singled out unfairly; comparisons are presented across the full available
  range rather than cherry-picked to favour or disadvantage any manufacturer.

## AI Declaration
Used Claude to help plan the target audience/data story structure and draft HTML and CSS for the homepage and README.
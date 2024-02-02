# SkySupply-Automation : UiPath Automation Project - Advanced CSV Processing and IP Whitelisting

## Overview
This comprehensive UiPath project is designed to automate two key functionalities: the export and post-processing of CSV files, and the addition and exclusion of IP whitelists in API Gateways. The project streamlines data handling, reporting tasks, and managing resource policies for API security and access control.

## Part 1: Advanced CSV Processing

### Features
- **Pagination Navigation**: Automates the process of navigating through paginations to ensure complete data capture.
- **CSV Export**: Facilitates the export of data into CSV format for various reporting and analysis needs.
- **Data Counting**: Performs counts on the size and status of data within the CSV to provide insights into the data set.

### Prerequisites
- UiPath Studio installed and configured.
- Access to the required platform with necessary permissions to fetch and export data.

### Execution
Run the `Export_PostProcessCSV` workflow. Monitor the execution log for any errors and ensure data is correctly processed and exported.

### Workflow Detail
- **Export and Post-Process CSV Workflow (`Export_PostProcessCSV.xaml`)**: Invokes sub-workflows for navigating paginations, exporting data to CSV, and performing data size and status counts.
  - **Go To Last Pagination (`GoToLastPagination.xaml`)**: Navigates through pagination to the last page.
  - **Export as CSV (`ExportAsCSV.xaml`)**: Exports data to CSV.
  - **Count Size and Status (`CountSizeStatus.xaml`)**: Counts data size and status within the CSV.

### Error Handling
Includes conditional checks and logging for managing exceptions and ensuring smooth execution.

### Support and Contribution
For support and contributions, please refer to the GitHub repository guidelines.

## Part 2: IP Whitelist Addition and Exclusion in API Gateways

### Features
- **Resource Policy Management**: Automates the editing of resource policies to manage IP whitelists.
- **JSON Formatting**: Dynamically formats IP addresses into JSON for resource policy updates.
- **Deployment Automation**: Automates the deployment of updated resource policies.

### Prerequisites
- UiPath Studio with necessary dependencies.
- Access to AWS Management Console with permissions to modify API Gateway settings.

### Execution
Execute the `bovenstad_IP_Whitelist_Addition_and_Exclusion_API_Gateway_Resource_Policy_Menu` workflow. Monitor updates and deployments.

### Workflow Detail
- **Resource Policy Update Workflow (`bovenstad_IP_Whitelist_Addition_and_Exclusion_API_Gateway_Resource_Policy_Menu.xaml`)**: Manages the addition and exclusion of IP addresses in API Gateway resource policies.
  - **Key Activities**: Includes navigation to AWS Management Console, resource policy editing, and deployment activities.

### Error Handling
Incorporates try-catch blocks and logging for error management during navigation, editing, and deployment phases.

### Support and Contribution
For support, utilize the UiPath Forum or contact project maintainers ([Vidya](https://github.com/vidyainc)). Contributions should follow project documentation guidelines.

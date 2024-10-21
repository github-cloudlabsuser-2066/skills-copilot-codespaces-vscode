# Define parameters
param(
    [string]$ResourceGroupName = "example-resources",
    [string]$Location = "East US",
    [string]$StorageAccountName,
    [string]$Sku = "Standard_LRS"
)

# Define a cleanup function to remove the resource group and all its resources
function Cleanup {
    param (
        [string]$ResourceGroupName
    )
    Write-Output "Deleting resource group and all its resources..."
    Remove-AzResourceGroup -Name $ResourceGroupName -Force -AsJob
    Write-Output "Resource group deleted successfully."
}

# Register the cleanup function to run when the script exits
Register-EngineEvent -SourceIdentifier PowerShell.Exiting -Action { Cleanup -ResourceGroupName $ResourceGroupName }

# Login to Azure (if not already logged in)
if (-not (Get-AzContext)) {
    Connect-AzAccount
}

# Create resource group
Write-Output "Creating resource group..."
New-AzResourceGroup -Name $ResourceGroupName -Location $Location

# Create storage account
Write-Output "Creating storage account..."
New-AzStorageAccount -ResourceGroupName $ResourceGroupName `
                     -Name $StorageAccountName `
                     -Location $Location `
                     -SkuName $Sku `
                     -Kind StorageV2

Write-Output "Storage account created successfully."
/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  LinkedStorageAccountsResource,
  LinkedStorageAccountsListByWorkspaceOptionalParams,
  DataSourceType,
  LinkedStorageAccountsCreateOrUpdateOptionalParams,
  LinkedStorageAccountsCreateOrUpdateResponse,
  LinkedStorageAccountsDeleteOptionalParams,
  LinkedStorageAccountsGetOptionalParams,
  LinkedStorageAccountsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a LinkedStorageAccounts. */
export interface LinkedStorageAccounts {
  /**
   * Gets all linked storage accounts associated with the specified workspace, storage accounts will be
   * sorted by their data source type.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: LinkedStorageAccountsListByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<LinkedStorageAccountsResource>;
  /**
   * Create or Update a link relation between current workspace and a group of storage accounts of a
   * specific data source type.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataSourceType Linked storage accounts type.
   * @param parameters The parameters required to create or update linked storage accounts.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    dataSourceType: DataSourceType,
    parameters: LinkedStorageAccountsResource,
    options?: LinkedStorageAccountsCreateOrUpdateOptionalParams
  ): Promise<LinkedStorageAccountsCreateOrUpdateResponse>;
  /**
   * Deletes all linked storage accounts of a specific data source type associated with the specified
   * workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataSourceType Linked storage accounts type.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    dataSourceType: DataSourceType,
    options?: LinkedStorageAccountsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets all linked storage account of a specific data source type associated with the specified
   * workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param dataSourceType Linked storage accounts type.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    dataSourceType: DataSourceType,
    options?: LinkedStorageAccountsGetOptionalParams
  ): Promise<LinkedStorageAccountsGetResponse>;
}
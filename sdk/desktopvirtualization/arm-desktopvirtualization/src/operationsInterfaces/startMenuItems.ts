/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { StartMenuItem, StartMenuItemsListOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a StartMenuItems. */
export interface StartMenuItems {
  /**
   * List start menu items in the given application group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationGroupName The name of the application group
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    applicationGroupName: string,
    options?: StartMenuItemsListOptionalParams
  ): PagedAsyncIterableIterator<StartMenuItem>;
}
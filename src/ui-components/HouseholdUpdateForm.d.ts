/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Household } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HouseholdUpdateFormInputValues = {};
export declare type HouseholdUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HouseholdUpdateFormOverridesProps = {
    HouseholdUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type HouseholdUpdateFormProps = React.PropsWithChildren<{
    overrides?: HouseholdUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    household?: Household;
    onSubmit?: (fields: HouseholdUpdateFormInputValues) => HouseholdUpdateFormInputValues;
    onSuccess?: (fields: HouseholdUpdateFormInputValues) => void;
    onError?: (fields: HouseholdUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: HouseholdUpdateFormInputValues) => HouseholdUpdateFormInputValues;
    onValidate?: HouseholdUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HouseholdUpdateForm(props: HouseholdUpdateFormProps): React.ReactElement;

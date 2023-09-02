import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly householdID: string;
  readonly househould: Household;
  readonly taskCompletions?: TaskCompletion[] | null;
  readonly defaultAssignee?: HouseholdMember | null;
  readonly nextCompletion?: TaskCompletion | null;
  readonly title: string;
  readonly description?: string | null;
  readonly frequency: number;
  readonly estimatedLength: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly taskDefaultAssigneeId?: string | null;
  readonly taskNextCompletionId?: string | null;
}

type LazyTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly householdID: string;
  readonly househould: AsyncItem<Household>;
  readonly taskCompletions: AsyncCollection<TaskCompletion>;
  readonly defaultAssignee: AsyncItem<HouseholdMember | undefined>;
  readonly nextCompletion: AsyncItem<TaskCompletion | undefined>;
  readonly title: string;
  readonly description?: string | null;
  readonly frequency: number;
  readonly estimatedLength: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly taskDefaultAssigneeId?: string | null;
  readonly taskNextCompletionId?: string | null;
}

export declare type Task = LazyLoading extends LazyLoadingDisabled ? EagerTask : LazyTask

export declare const Task: (new (init: ModelInit<Task>) => Task) & {
  copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}

type EagerTaskCompletion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TaskCompletion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly taskID: string;
  readonly task: Task;
  readonly assigneeID: string;
  readonly asignee: HouseholdMember;
  readonly householdID: string;
  readonly household: Household;
  readonly dueDate: string;
  readonly completedOn?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTaskCompletion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TaskCompletion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly taskID: string;
  readonly task: AsyncItem<Task>;
  readonly assigneeID: string;
  readonly asignee: AsyncItem<HouseholdMember>;
  readonly householdID: string;
  readonly household: AsyncItem<Household>;
  readonly dueDate: string;
  readonly completedOn?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TaskCompletion = LazyLoading extends LazyLoadingDisabled ? EagerTaskCompletion : LazyTaskCompletion

export declare const TaskCompletion: (new (init: ModelInit<TaskCompletion>) => TaskCompletion) & {
  copyOf(source: TaskCompletion, mutator: (draft: MutableModel<TaskCompletion>) => MutableModel<TaskCompletion> | void): TaskCompletion;
}

type EagerHousehold = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Household, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly HouseholdMembers?: HouseholdMember[] | null;
  readonly Tasks?: Task[] | null;
  readonly TaskCompletions?: TaskCompletion[] | null;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHousehold = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Household, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly HouseholdMembers: AsyncCollection<HouseholdMember>;
  readonly Tasks: AsyncCollection<Task>;
  readonly TaskCompletions: AsyncCollection<TaskCompletion>;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Household = LazyLoading extends LazyLoadingDisabled ? EagerHousehold : LazyHousehold

export declare const Household: (new (init: ModelInit<Household>) => Household) & {
  copyOf(source: Household, mutator: (draft: MutableModel<Household>) => MutableModel<Household> | void): Household;
}

type EagerHouseholdMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HouseholdMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly householdID: string;
  readonly household: Household;
  readonly assignedTasks?: TaskCompletion[] | null;
  readonly name: string;
  readonly userId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHouseholdMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HouseholdMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly householdID: string;
  readonly household: AsyncItem<Household>;
  readonly assignedTasks: AsyncCollection<TaskCompletion>;
  readonly name: string;
  readonly userId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type HouseholdMember = LazyLoading extends LazyLoadingDisabled ? EagerHouseholdMember : LazyHouseholdMember

export declare const HouseholdMember: (new (init: ModelInit<HouseholdMember>) => HouseholdMember) & {
  copyOf(source: HouseholdMember, mutator: (draft: MutableModel<HouseholdMember>) => MutableModel<HouseholdMember> | void): HouseholdMember;
}
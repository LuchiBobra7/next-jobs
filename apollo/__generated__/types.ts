export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type City = {
  __typename?: 'City';
  country: Country;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  jobs?: Maybe<Array<Job>>;
  name: Scalars['String'];
  slug: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type CityjobsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<JobOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<JobWhereInput>;
};

export enum CityOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  type_ASC = 'type_ASC',
  type_DESC = 'type_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export type CityWhereInput = {
  AND?: InputMaybe<Array<CityWhereInput>>;
  NOT?: InputMaybe<Array<CityWhereInput>>;
  OR?: InputMaybe<Array<CityWhereInput>>;
  country?: InputMaybe<CountryWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_ends_with?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  id_starts_with?: InputMaybe<Scalars['ID']>;
  jobs_every?: InputMaybe<JobWhereInput>;
  jobs_none?: InputMaybe<JobWhereInput>;
  jobs_some?: InputMaybe<JobWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_ends_with?: InputMaybe<Scalars['String']>;
  slug_gt?: InputMaybe<Scalars['String']>;
  slug_gte?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_lt?: InputMaybe<Scalars['String']>;
  slug_lte?: InputMaybe<Scalars['String']>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  slug_starts_with?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_not?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type Commitment = {
  __typename?: 'Commitment';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  jobs?: Maybe<Array<Job>>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type CommitmentjobsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<JobOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<JobWhereInput>;
};

export type CommitmentWhereInput = {
  AND?: InputMaybe<Array<CommitmentWhereInput>>;
  NOT?: InputMaybe<Array<CommitmentWhereInput>>;
  OR?: InputMaybe<Array<CommitmentWhereInput>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_ends_with?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  id_starts_with?: InputMaybe<Scalars['ID']>;
  jobs_every?: InputMaybe<JobWhereInput>;
  jobs_none?: InputMaybe<JobWhereInput>;
  jobs_some?: InputMaybe<JobWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_ends_with?: InputMaybe<Scalars['String']>;
  slug_gt?: InputMaybe<Scalars['String']>;
  slug_gte?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_lt?: InputMaybe<Scalars['String']>;
  slug_lte?: InputMaybe<Scalars['String']>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type Company = {
  __typename?: 'Company';
  createdAt: Scalars['DateTime'];
  emailed?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  jobs?: Maybe<Array<Job>>;
  logoUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  twitter?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  websiteUrl: Scalars['String'];
};


export type CompanyjobsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<JobOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<JobWhereInput>;
};

export type CompanyWhereInput = {
  AND?: InputMaybe<Array<CompanyWhereInput>>;
  NOT?: InputMaybe<Array<CompanyWhereInput>>;
  OR?: InputMaybe<Array<CompanyWhereInput>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  emailed?: InputMaybe<Scalars['Boolean']>;
  emailed_not?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_ends_with?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  id_starts_with?: InputMaybe<Scalars['ID']>;
  jobs_every?: InputMaybe<JobWhereInput>;
  jobs_none?: InputMaybe<JobWhereInput>;
  jobs_some?: InputMaybe<JobWhereInput>;
  logoUrl?: InputMaybe<Scalars['String']>;
  logoUrl_contains?: InputMaybe<Scalars['String']>;
  logoUrl_ends_with?: InputMaybe<Scalars['String']>;
  logoUrl_gt?: InputMaybe<Scalars['String']>;
  logoUrl_gte?: InputMaybe<Scalars['String']>;
  logoUrl_in?: InputMaybe<Array<Scalars['String']>>;
  logoUrl_lt?: InputMaybe<Scalars['String']>;
  logoUrl_lte?: InputMaybe<Scalars['String']>;
  logoUrl_not?: InputMaybe<Scalars['String']>;
  logoUrl_not_contains?: InputMaybe<Scalars['String']>;
  logoUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  logoUrl_not_in?: InputMaybe<Array<Scalars['String']>>;
  logoUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  logoUrl_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_ends_with?: InputMaybe<Scalars['String']>;
  slug_gt?: InputMaybe<Scalars['String']>;
  slug_gte?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_lt?: InputMaybe<Scalars['String']>;
  slug_lte?: InputMaybe<Scalars['String']>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  slug_starts_with?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  twitter_contains?: InputMaybe<Scalars['String']>;
  twitter_ends_with?: InputMaybe<Scalars['String']>;
  twitter_gt?: InputMaybe<Scalars['String']>;
  twitter_gte?: InputMaybe<Scalars['String']>;
  twitter_in?: InputMaybe<Array<Scalars['String']>>;
  twitter_lt?: InputMaybe<Scalars['String']>;
  twitter_lte?: InputMaybe<Scalars['String']>;
  twitter_not?: InputMaybe<Scalars['String']>;
  twitter_not_contains?: InputMaybe<Scalars['String']>;
  twitter_not_ends_with?: InputMaybe<Scalars['String']>;
  twitter_not_in?: InputMaybe<Array<Scalars['String']>>;
  twitter_not_starts_with?: InputMaybe<Scalars['String']>;
  twitter_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  websiteUrl?: InputMaybe<Scalars['String']>;
  websiteUrl_contains?: InputMaybe<Scalars['String']>;
  websiteUrl_ends_with?: InputMaybe<Scalars['String']>;
  websiteUrl_gt?: InputMaybe<Scalars['String']>;
  websiteUrl_gte?: InputMaybe<Scalars['String']>;
  websiteUrl_in?: InputMaybe<Array<Scalars['String']>>;
  websiteUrl_lt?: InputMaybe<Scalars['String']>;
  websiteUrl_lte?: InputMaybe<Scalars['String']>;
  websiteUrl_not?: InputMaybe<Scalars['String']>;
  websiteUrl_not_contains?: InputMaybe<Scalars['String']>;
  websiteUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  websiteUrl_not_in?: InputMaybe<Array<Scalars['String']>>;
  websiteUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  websiteUrl_starts_with?: InputMaybe<Scalars['String']>;
};

export type Country = {
  __typename?: 'Country';
  cities?: Maybe<Array<City>>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isoCode?: Maybe<Scalars['String']>;
  jobs?: Maybe<Array<Job>>;
  name: Scalars['String'];
  slug: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type CountrycitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CityOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CityWhereInput>;
};


export type CountryjobsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<JobOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<JobWhereInput>;
};

export enum CountryOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  isoCode_ASC = 'isoCode_ASC',
  isoCode_DESC = 'isoCode_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  type_ASC = 'type_ASC',
  type_DESC = 'type_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export type CountryWhereInput = {
  AND?: InputMaybe<Array<CountryWhereInput>>;
  NOT?: InputMaybe<Array<CountryWhereInput>>;
  OR?: InputMaybe<Array<CountryWhereInput>>;
  cities_every?: InputMaybe<CityWhereInput>;
  cities_none?: InputMaybe<CityWhereInput>;
  cities_some?: InputMaybe<CityWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_ends_with?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isoCode?: InputMaybe<Scalars['String']>;
  isoCode_contains?: InputMaybe<Scalars['String']>;
  isoCode_ends_with?: InputMaybe<Scalars['String']>;
  isoCode_gt?: InputMaybe<Scalars['String']>;
  isoCode_gte?: InputMaybe<Scalars['String']>;
  isoCode_in?: InputMaybe<Array<Scalars['String']>>;
  isoCode_lt?: InputMaybe<Scalars['String']>;
  isoCode_lte?: InputMaybe<Scalars['String']>;
  isoCode_not?: InputMaybe<Scalars['String']>;
  isoCode_not_contains?: InputMaybe<Scalars['String']>;
  isoCode_not_ends_with?: InputMaybe<Scalars['String']>;
  isoCode_not_in?: InputMaybe<Array<Scalars['String']>>;
  isoCode_not_starts_with?: InputMaybe<Scalars['String']>;
  isoCode_starts_with?: InputMaybe<Scalars['String']>;
  jobs_every?: InputMaybe<JobWhereInput>;
  jobs_none?: InputMaybe<JobWhereInput>;
  jobs_some?: InputMaybe<JobWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_ends_with?: InputMaybe<Scalars['String']>;
  slug_gt?: InputMaybe<Scalars['String']>;
  slug_gte?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_lt?: InputMaybe<Scalars['String']>;
  slug_lte?: InputMaybe<Scalars['String']>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  slug_starts_with?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_not?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type Job = {
  __typename?: 'Job';
  applyUrl?: Maybe<Scalars['String']>;
  cities?: Maybe<Array<City>>;
  commitment: Commitment;
  company?: Maybe<Company>;
  countries?: Maybe<Array<Country>>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isFeatured?: Maybe<Scalars['Boolean']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  locationNames?: Maybe<Scalars['String']>;
  postedAt: Scalars['DateTime'];
  remotes?: Maybe<Array<Remote>>;
  slug: Scalars['String'];
  tags?: Maybe<Array<Tag>>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userEmail?: Maybe<Scalars['String']>;
};


export type JobcitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CityOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CityWhereInput>;
};


export type JobcountriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CountryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CountryWhereInput>;
};


export type JobremotesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RemoteOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RemoteWhereInput>;
};


export type JobtagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TagOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TagWhereInput>;
};

export type JobInput = {
  companySlug: Scalars['String'];
  jobSlug: Scalars['String'];
};

export enum JobOrderByInput {
  applyUrl_ASC = 'applyUrl_ASC',
  applyUrl_DESC = 'applyUrl_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  description_ASC = 'description_ASC',
  description_DESC = 'description_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  isFeatured_ASC = 'isFeatured_ASC',
  isFeatured_DESC = 'isFeatured_DESC',
  isPublished_ASC = 'isPublished_ASC',
  isPublished_DESC = 'isPublished_DESC',
  locationNames_ASC = 'locationNames_ASC',
  locationNames_DESC = 'locationNames_DESC',
  postedAt_ASC = 'postedAt_ASC',
  postedAt_DESC = 'postedAt_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  userEmail_ASC = 'userEmail_ASC',
  userEmail_DESC = 'userEmail_DESC'
}

export type JobWhereInput = {
  AND?: InputMaybe<Array<JobWhereInput>>;
  NOT?: InputMaybe<Array<JobWhereInput>>;
  OR?: InputMaybe<Array<JobWhereInput>>;
  applyUrl?: InputMaybe<Scalars['String']>;
  applyUrl_contains?: InputMaybe<Scalars['String']>;
  applyUrl_ends_with?: InputMaybe<Scalars['String']>;
  applyUrl_gt?: InputMaybe<Scalars['String']>;
  applyUrl_gte?: InputMaybe<Scalars['String']>;
  applyUrl_in?: InputMaybe<Array<Scalars['String']>>;
  applyUrl_lt?: InputMaybe<Scalars['String']>;
  applyUrl_lte?: InputMaybe<Scalars['String']>;
  applyUrl_not?: InputMaybe<Scalars['String']>;
  applyUrl_not_contains?: InputMaybe<Scalars['String']>;
  applyUrl_not_ends_with?: InputMaybe<Scalars['String']>;
  applyUrl_not_in?: InputMaybe<Array<Scalars['String']>>;
  applyUrl_not_starts_with?: InputMaybe<Scalars['String']>;
  applyUrl_starts_with?: InputMaybe<Scalars['String']>;
  cities_every?: InputMaybe<CityWhereInput>;
  cities_none?: InputMaybe<CityWhereInput>;
  cities_some?: InputMaybe<CityWhereInput>;
  commitment?: InputMaybe<CommitmentWhereInput>;
  company?: InputMaybe<CompanyWhereInput>;
  countries_every?: InputMaybe<CountryWhereInput>;
  countries_none?: InputMaybe<CountryWhereInput>;
  countries_some?: InputMaybe<CountryWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_ends_with?: InputMaybe<Scalars['String']>;
  description_gt?: InputMaybe<Scalars['String']>;
  description_gte?: InputMaybe<Scalars['String']>;
  description_in?: InputMaybe<Array<Scalars['String']>>;
  description_lt?: InputMaybe<Scalars['String']>;
  description_lte?: InputMaybe<Scalars['String']>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_ends_with?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isFeatured?: InputMaybe<Scalars['Boolean']>;
  isFeatured_not?: InputMaybe<Scalars['Boolean']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  isPublished_not?: InputMaybe<Scalars['Boolean']>;
  locationNames?: InputMaybe<Scalars['String']>;
  locationNames_contains?: InputMaybe<Scalars['String']>;
  locationNames_ends_with?: InputMaybe<Scalars['String']>;
  locationNames_gt?: InputMaybe<Scalars['String']>;
  locationNames_gte?: InputMaybe<Scalars['String']>;
  locationNames_in?: InputMaybe<Array<Scalars['String']>>;
  locationNames_lt?: InputMaybe<Scalars['String']>;
  locationNames_lte?: InputMaybe<Scalars['String']>;
  locationNames_not?: InputMaybe<Scalars['String']>;
  locationNames_not_contains?: InputMaybe<Scalars['String']>;
  locationNames_not_ends_with?: InputMaybe<Scalars['String']>;
  locationNames_not_in?: InputMaybe<Array<Scalars['String']>>;
  locationNames_not_starts_with?: InputMaybe<Scalars['String']>;
  locationNames_starts_with?: InputMaybe<Scalars['String']>;
  postedAt?: InputMaybe<Scalars['DateTime']>;
  postedAt_gt?: InputMaybe<Scalars['DateTime']>;
  postedAt_gte?: InputMaybe<Scalars['DateTime']>;
  postedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  postedAt_lt?: InputMaybe<Scalars['DateTime']>;
  postedAt_lte?: InputMaybe<Scalars['DateTime']>;
  postedAt_not?: InputMaybe<Scalars['DateTime']>;
  postedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  remotes_every?: InputMaybe<RemoteWhereInput>;
  remotes_none?: InputMaybe<RemoteWhereInput>;
  remotes_some?: InputMaybe<RemoteWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_ends_with?: InputMaybe<Scalars['String']>;
  slug_gt?: InputMaybe<Scalars['String']>;
  slug_gte?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_lt?: InputMaybe<Scalars['String']>;
  slug_lte?: InputMaybe<Scalars['String']>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  slug_starts_with?: InputMaybe<Scalars['String']>;
  tags_every?: InputMaybe<TagWhereInput>;
  tags_none?: InputMaybe<TagWhereInput>;
  tags_some?: InputMaybe<TagWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_ends_with?: InputMaybe<Scalars['String']>;
  title_gt?: InputMaybe<Scalars['String']>;
  title_gte?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_lt?: InputMaybe<Scalars['String']>;
  title_lte?: InputMaybe<Scalars['String']>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  userEmail?: InputMaybe<Scalars['String']>;
  userEmail_contains?: InputMaybe<Scalars['String']>;
  userEmail_ends_with?: InputMaybe<Scalars['String']>;
  userEmail_gt?: InputMaybe<Scalars['String']>;
  userEmail_gte?: InputMaybe<Scalars['String']>;
  userEmail_in?: InputMaybe<Array<Scalars['String']>>;
  userEmail_lt?: InputMaybe<Scalars['String']>;
  userEmail_lte?: InputMaybe<Scalars['String']>;
  userEmail_not?: InputMaybe<Scalars['String']>;
  userEmail_not_contains?: InputMaybe<Scalars['String']>;
  userEmail_not_ends_with?: InputMaybe<Scalars['String']>;
  userEmail_not_in?: InputMaybe<Array<Scalars['String']>>;
  userEmail_not_starts_with?: InputMaybe<Scalars['String']>;
  userEmail_starts_with?: InputMaybe<Scalars['String']>;
};

export type JobsInput = {
  slug?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type Location = {
  __typename?: 'Location';
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  type: Scalars['String'];
};

export type LocationInput = {
  slug: Scalars['String'];
};

export type LocationsInput = {
  value: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  postJob: Job;
  subscribe: User;
  updateCompany: Company;
  updateJob: Job;
};


export type MutationpostJobArgs = {
  input: PostJobInput;
};


export type MutationsubscribeArgs = {
  input: SubscribeInput;
};


export type MutationupdateCompanyArgs = {
  adminSecret: Scalars['String'];
  input: UpdateCompanyInput;
};


export type MutationupdateJobArgs = {
  adminSecret: Scalars['String'];
  input: UpdateJobInput;
};

export type PostJobInput = {
  applyUrl: Scalars['String'];
  commitmentId: Scalars['ID'];
  companyName: Scalars['String'];
  description: Scalars['String'];
  locationNames: Scalars['String'];
  title: Scalars['String'];
  userEmail: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  cities: Array<City>;
  city: City;
  commitments: Array<Commitment>;
  companies: Array<Company>;
  countries: Array<Country>;
  country: Country;
  job: Job;
  jobs: Array<Job>;
  locations: Array<Location>;
  remote: Remote;
  remotes: Array<Remote>;
};


export type QuerycityArgs = {
  input: LocationInput;
};


export type QuerycountryArgs = {
  input: LocationInput;
};


export type QueryjobArgs = {
  input: JobInput;
};


export type QueryjobsArgs = {
  input?: InputMaybe<JobsInput>;
};


export type QuerylocationsArgs = {
  input: LocationsInput;
};


export type QueryremoteArgs = {
  input: LocationInput;
};

export type Remote = {
  __typename?: 'Remote';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  jobs?: Maybe<Array<Job>>;
  name: Scalars['String'];
  slug: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type RemotejobsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<JobOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<JobWhereInput>;
};

export enum RemoteOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  type_ASC = 'type_ASC',
  type_DESC = 'type_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export type RemoteWhereInput = {
  AND?: InputMaybe<Array<RemoteWhereInput>>;
  NOT?: InputMaybe<Array<RemoteWhereInput>>;
  OR?: InputMaybe<Array<RemoteWhereInput>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_ends_with?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  id_starts_with?: InputMaybe<Scalars['ID']>;
  jobs_every?: InputMaybe<JobWhereInput>;
  jobs_none?: InputMaybe<JobWhereInput>;
  jobs_some?: InputMaybe<JobWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_ends_with?: InputMaybe<Scalars['String']>;
  slug_gt?: InputMaybe<Scalars['String']>;
  slug_gte?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_lt?: InputMaybe<Scalars['String']>;
  slug_lte?: InputMaybe<Scalars['String']>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  slug_starts_with?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_ends_with?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_not?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_ends_with?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_starts_with?: InputMaybe<Scalars['String']>;
  type_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type SubscribeInput = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  jobs?: Maybe<Array<Job>>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type TagjobsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<JobOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<JobWhereInput>;
};

export enum TagOrderByInput {
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC',
  slug_ASC = 'slug_ASC',
  slug_DESC = 'slug_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC'
}

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_contains?: InputMaybe<Scalars['ID']>;
  id_ends_with?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_contains?: InputMaybe<Scalars['ID']>;
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  id_starts_with?: InputMaybe<Scalars['ID']>;
  jobs_every?: InputMaybe<JobWhereInput>;
  jobs_none?: InputMaybe<JobWhereInput>;
  jobs_some?: InputMaybe<JobWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_ends_with?: InputMaybe<Scalars['String']>;
  slug_gt?: InputMaybe<Scalars['String']>;
  slug_gte?: InputMaybe<Scalars['String']>;
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  slug_lt?: InputMaybe<Scalars['String']>;
  slug_lte?: InputMaybe<Scalars['String']>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type UpdateCompanyInput = {
  id: Scalars['ID'];
  logoUrl: Scalars['String'];
};

export type UpdateJobInput = {
  description: Scalars['String'];
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  subscribe: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
};

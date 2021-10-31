export type Maybe<T> = T | null;
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
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<JobOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<JobWhereInput>;
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
  AND?: Maybe<Array<CityWhereInput>>;
  NOT?: Maybe<Array<CityWhereInput>>;
  OR?: Maybe<Array<CityWhereInput>>;
  country?: Maybe<CountryWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  jobs_every?: Maybe<JobWhereInput>;
  jobs_none?: Maybe<JobWhereInput>;
  jobs_some?: Maybe<JobWhereInput>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_gt?: Maybe<Scalars['String']>;
  slug_gte?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Scalars['String']>>;
  slug_lt?: Maybe<Scalars['String']>;
  slug_lte?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  type_contains?: Maybe<Scalars['String']>;
  type_ends_with?: Maybe<Scalars['String']>;
  type_gt?: Maybe<Scalars['String']>;
  type_gte?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  type_lt?: Maybe<Scalars['String']>;
  type_lte?: Maybe<Scalars['String']>;
  type_not?: Maybe<Scalars['String']>;
  type_not_contains?: Maybe<Scalars['String']>;
  type_not_ends_with?: Maybe<Scalars['String']>;
  type_not_in?: Maybe<Array<Scalars['String']>>;
  type_not_starts_with?: Maybe<Scalars['String']>;
  type_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
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
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<JobOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<JobWhereInput>;
};

export type CommitmentWhereInput = {
  AND?: Maybe<Array<CommitmentWhereInput>>;
  NOT?: Maybe<Array<CommitmentWhereInput>>;
  OR?: Maybe<Array<CommitmentWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  jobs_every?: Maybe<JobWhereInput>;
  jobs_none?: Maybe<JobWhereInput>;
  jobs_some?: Maybe<JobWhereInput>;
  slug?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_gt?: Maybe<Scalars['String']>;
  slug_gte?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Scalars['String']>>;
  slug_lt?: Maybe<Scalars['String']>;
  slug_lte?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_gt?: Maybe<Scalars['String']>;
  title_gte?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_lt?: Maybe<Scalars['String']>;
  title_lte?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Scalars['String']>>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
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
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<JobOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<JobWhereInput>;
};

export type CompanyWhereInput = {
  AND?: Maybe<Array<CompanyWhereInput>>;
  NOT?: Maybe<Array<CompanyWhereInput>>;
  OR?: Maybe<Array<CompanyWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  emailed?: Maybe<Scalars['Boolean']>;
  emailed_not?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  jobs_every?: Maybe<JobWhereInput>;
  jobs_none?: Maybe<JobWhereInput>;
  jobs_some?: Maybe<JobWhereInput>;
  logoUrl?: Maybe<Scalars['String']>;
  logoUrl_contains?: Maybe<Scalars['String']>;
  logoUrl_ends_with?: Maybe<Scalars['String']>;
  logoUrl_gt?: Maybe<Scalars['String']>;
  logoUrl_gte?: Maybe<Scalars['String']>;
  logoUrl_in?: Maybe<Array<Scalars['String']>>;
  logoUrl_lt?: Maybe<Scalars['String']>;
  logoUrl_lte?: Maybe<Scalars['String']>;
  logoUrl_not?: Maybe<Scalars['String']>;
  logoUrl_not_contains?: Maybe<Scalars['String']>;
  logoUrl_not_ends_with?: Maybe<Scalars['String']>;
  logoUrl_not_in?: Maybe<Array<Scalars['String']>>;
  logoUrl_not_starts_with?: Maybe<Scalars['String']>;
  logoUrl_starts_with?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_gt?: Maybe<Scalars['String']>;
  slug_gte?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Scalars['String']>>;
  slug_lt?: Maybe<Scalars['String']>;
  slug_lte?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  twitter_contains?: Maybe<Scalars['String']>;
  twitter_ends_with?: Maybe<Scalars['String']>;
  twitter_gt?: Maybe<Scalars['String']>;
  twitter_gte?: Maybe<Scalars['String']>;
  twitter_in?: Maybe<Array<Scalars['String']>>;
  twitter_lt?: Maybe<Scalars['String']>;
  twitter_lte?: Maybe<Scalars['String']>;
  twitter_not?: Maybe<Scalars['String']>;
  twitter_not_contains?: Maybe<Scalars['String']>;
  twitter_not_ends_with?: Maybe<Scalars['String']>;
  twitter_not_in?: Maybe<Array<Scalars['String']>>;
  twitter_not_starts_with?: Maybe<Scalars['String']>;
  twitter_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  websiteUrl?: Maybe<Scalars['String']>;
  websiteUrl_contains?: Maybe<Scalars['String']>;
  websiteUrl_ends_with?: Maybe<Scalars['String']>;
  websiteUrl_gt?: Maybe<Scalars['String']>;
  websiteUrl_gte?: Maybe<Scalars['String']>;
  websiteUrl_in?: Maybe<Array<Scalars['String']>>;
  websiteUrl_lt?: Maybe<Scalars['String']>;
  websiteUrl_lte?: Maybe<Scalars['String']>;
  websiteUrl_not?: Maybe<Scalars['String']>;
  websiteUrl_not_contains?: Maybe<Scalars['String']>;
  websiteUrl_not_ends_with?: Maybe<Scalars['String']>;
  websiteUrl_not_in?: Maybe<Array<Scalars['String']>>;
  websiteUrl_not_starts_with?: Maybe<Scalars['String']>;
  websiteUrl_starts_with?: Maybe<Scalars['String']>;
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
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CityWhereInput>;
};


export type CountryjobsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<JobOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<JobWhereInput>;
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
  AND?: Maybe<Array<CountryWhereInput>>;
  NOT?: Maybe<Array<CountryWhereInput>>;
  OR?: Maybe<Array<CountryWhereInput>>;
  cities_every?: Maybe<CityWhereInput>;
  cities_none?: Maybe<CityWhereInput>;
  cities_some?: Maybe<CityWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  isoCode?: Maybe<Scalars['String']>;
  isoCode_contains?: Maybe<Scalars['String']>;
  isoCode_ends_with?: Maybe<Scalars['String']>;
  isoCode_gt?: Maybe<Scalars['String']>;
  isoCode_gte?: Maybe<Scalars['String']>;
  isoCode_in?: Maybe<Array<Scalars['String']>>;
  isoCode_lt?: Maybe<Scalars['String']>;
  isoCode_lte?: Maybe<Scalars['String']>;
  isoCode_not?: Maybe<Scalars['String']>;
  isoCode_not_contains?: Maybe<Scalars['String']>;
  isoCode_not_ends_with?: Maybe<Scalars['String']>;
  isoCode_not_in?: Maybe<Array<Scalars['String']>>;
  isoCode_not_starts_with?: Maybe<Scalars['String']>;
  isoCode_starts_with?: Maybe<Scalars['String']>;
  jobs_every?: Maybe<JobWhereInput>;
  jobs_none?: Maybe<JobWhereInput>;
  jobs_some?: Maybe<JobWhereInput>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_gt?: Maybe<Scalars['String']>;
  slug_gte?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Scalars['String']>>;
  slug_lt?: Maybe<Scalars['String']>;
  slug_lte?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  type_contains?: Maybe<Scalars['String']>;
  type_ends_with?: Maybe<Scalars['String']>;
  type_gt?: Maybe<Scalars['String']>;
  type_gte?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  type_lt?: Maybe<Scalars['String']>;
  type_lte?: Maybe<Scalars['String']>;
  type_not?: Maybe<Scalars['String']>;
  type_not_contains?: Maybe<Scalars['String']>;
  type_not_ends_with?: Maybe<Scalars['String']>;
  type_not_in?: Maybe<Array<Scalars['String']>>;
  type_not_starts_with?: Maybe<Scalars['String']>;
  type_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
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
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CityOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CityWhereInput>;
};


export type JobcountriesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CountryOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<CountryWhereInput>;
};


export type JobremotesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<RemoteOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<RemoteWhereInput>;
};


export type JobtagsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TagOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<TagWhereInput>;
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
  AND?: Maybe<Array<JobWhereInput>>;
  NOT?: Maybe<Array<JobWhereInput>>;
  OR?: Maybe<Array<JobWhereInput>>;
  applyUrl?: Maybe<Scalars['String']>;
  applyUrl_contains?: Maybe<Scalars['String']>;
  applyUrl_ends_with?: Maybe<Scalars['String']>;
  applyUrl_gt?: Maybe<Scalars['String']>;
  applyUrl_gte?: Maybe<Scalars['String']>;
  applyUrl_in?: Maybe<Array<Scalars['String']>>;
  applyUrl_lt?: Maybe<Scalars['String']>;
  applyUrl_lte?: Maybe<Scalars['String']>;
  applyUrl_not?: Maybe<Scalars['String']>;
  applyUrl_not_contains?: Maybe<Scalars['String']>;
  applyUrl_not_ends_with?: Maybe<Scalars['String']>;
  applyUrl_not_in?: Maybe<Array<Scalars['String']>>;
  applyUrl_not_starts_with?: Maybe<Scalars['String']>;
  applyUrl_starts_with?: Maybe<Scalars['String']>;
  cities_every?: Maybe<CityWhereInput>;
  cities_none?: Maybe<CityWhereInput>;
  cities_some?: Maybe<CityWhereInput>;
  commitment?: Maybe<CommitmentWhereInput>;
  company?: Maybe<CompanyWhereInput>;
  countries_every?: Maybe<CountryWhereInput>;
  countries_none?: Maybe<CountryWhereInput>;
  countries_some?: Maybe<CountryWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  description?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_gt?: Maybe<Scalars['String']>;
  description_gte?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_lt?: Maybe<Scalars['String']>;
  description_lte?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_not_in?: Maybe<Array<Scalars['String']>>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  isFeatured_not?: Maybe<Scalars['Boolean']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  isPublished_not?: Maybe<Scalars['Boolean']>;
  locationNames?: Maybe<Scalars['String']>;
  locationNames_contains?: Maybe<Scalars['String']>;
  locationNames_ends_with?: Maybe<Scalars['String']>;
  locationNames_gt?: Maybe<Scalars['String']>;
  locationNames_gte?: Maybe<Scalars['String']>;
  locationNames_in?: Maybe<Array<Scalars['String']>>;
  locationNames_lt?: Maybe<Scalars['String']>;
  locationNames_lte?: Maybe<Scalars['String']>;
  locationNames_not?: Maybe<Scalars['String']>;
  locationNames_not_contains?: Maybe<Scalars['String']>;
  locationNames_not_ends_with?: Maybe<Scalars['String']>;
  locationNames_not_in?: Maybe<Array<Scalars['String']>>;
  locationNames_not_starts_with?: Maybe<Scalars['String']>;
  locationNames_starts_with?: Maybe<Scalars['String']>;
  postedAt?: Maybe<Scalars['DateTime']>;
  postedAt_gt?: Maybe<Scalars['DateTime']>;
  postedAt_gte?: Maybe<Scalars['DateTime']>;
  postedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  postedAt_lt?: Maybe<Scalars['DateTime']>;
  postedAt_lte?: Maybe<Scalars['DateTime']>;
  postedAt_not?: Maybe<Scalars['DateTime']>;
  postedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  remotes_every?: Maybe<RemoteWhereInput>;
  remotes_none?: Maybe<RemoteWhereInput>;
  remotes_some?: Maybe<RemoteWhereInput>;
  slug?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_gt?: Maybe<Scalars['String']>;
  slug_gte?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Scalars['String']>>;
  slug_lt?: Maybe<Scalars['String']>;
  slug_lte?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  tags_every?: Maybe<TagWhereInput>;
  tags_none?: Maybe<TagWhereInput>;
  tags_some?: Maybe<TagWhereInput>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_gt?: Maybe<Scalars['String']>;
  title_gte?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_lt?: Maybe<Scalars['String']>;
  title_lte?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Scalars['String']>>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  userEmail?: Maybe<Scalars['String']>;
  userEmail_contains?: Maybe<Scalars['String']>;
  userEmail_ends_with?: Maybe<Scalars['String']>;
  userEmail_gt?: Maybe<Scalars['String']>;
  userEmail_gte?: Maybe<Scalars['String']>;
  userEmail_in?: Maybe<Array<Scalars['String']>>;
  userEmail_lt?: Maybe<Scalars['String']>;
  userEmail_lte?: Maybe<Scalars['String']>;
  userEmail_not?: Maybe<Scalars['String']>;
  userEmail_not_contains?: Maybe<Scalars['String']>;
  userEmail_not_ends_with?: Maybe<Scalars['String']>;
  userEmail_not_in?: Maybe<Array<Scalars['String']>>;
  userEmail_not_starts_with?: Maybe<Scalars['String']>;
  userEmail_starts_with?: Maybe<Scalars['String']>;
};

export type JobsInput = {
  slug?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
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
  input?: Maybe<JobsInput>;
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
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<JobOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<JobWhereInput>;
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
  AND?: Maybe<Array<RemoteWhereInput>>;
  NOT?: Maybe<Array<RemoteWhereInput>>;
  OR?: Maybe<Array<RemoteWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  jobs_every?: Maybe<JobWhereInput>;
  jobs_none?: Maybe<JobWhereInput>;
  jobs_some?: Maybe<JobWhereInput>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_gt?: Maybe<Scalars['String']>;
  slug_gte?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Scalars['String']>>;
  slug_lt?: Maybe<Scalars['String']>;
  slug_lte?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  type_contains?: Maybe<Scalars['String']>;
  type_ends_with?: Maybe<Scalars['String']>;
  type_gt?: Maybe<Scalars['String']>;
  type_gte?: Maybe<Scalars['String']>;
  type_in?: Maybe<Array<Scalars['String']>>;
  type_lt?: Maybe<Scalars['String']>;
  type_lte?: Maybe<Scalars['String']>;
  type_not?: Maybe<Scalars['String']>;
  type_not_contains?: Maybe<Scalars['String']>;
  type_not_ends_with?: Maybe<Scalars['String']>;
  type_not_in?: Maybe<Array<Scalars['String']>>;
  type_not_starts_with?: Maybe<Scalars['String']>;
  type_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
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
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<JobOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<JobWhereInput>;
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
  AND?: Maybe<Array<TagWhereInput>>;
  NOT?: Maybe<Array<TagWhereInput>>;
  OR?: Maybe<Array<TagWhereInput>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  jobs_every?: Maybe<JobWhereInput>;
  jobs_none?: Maybe<JobWhereInput>;
  jobs_some?: Maybe<JobWhereInput>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  slug_contains?: Maybe<Scalars['String']>;
  slug_ends_with?: Maybe<Scalars['String']>;
  slug_gt?: Maybe<Scalars['String']>;
  slug_gte?: Maybe<Scalars['String']>;
  slug_in?: Maybe<Array<Scalars['String']>>;
  slug_lt?: Maybe<Scalars['String']>;
  slug_lte?: Maybe<Scalars['String']>;
  slug_not?: Maybe<Scalars['String']>;
  slug_not_contains?: Maybe<Scalars['String']>;
  slug_not_ends_with?: Maybe<Scalars['String']>;
  slug_not_in?: Maybe<Array<Scalars['String']>>;
  slug_not_starts_with?: Maybe<Scalars['String']>;
  slug_starts_with?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
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

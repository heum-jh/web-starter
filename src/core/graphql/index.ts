import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  PhoneNumber: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  /** 읍면동 */
  eupmyeondong: Scalars['String']['output'];
  /** 위도 */
  latitude: Scalars['Float']['output'];
  /** 경도 */
  longitude: Scalars['Float']['output'];
  /** 시도 */
  sido: Scalars['String']['output'];
  /** 시군구 */
  sigungu?: Maybe<Scalars['String']['output']>;
};

export type AddressEdge = {
  __typename?: 'AddressEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: Address;
};

/** 관리자 */
export type Admin = User & {
  __typename?: 'Admin';
  /** 관리자용 유저 메모 */
  adminMemo?: Maybe<Scalars['String']['output']>;
  communityPostCount: Scalars['Int']['output'];
  communityPostHideCount: Scalars['Int']['output'];
  communityPostLikeCount: Scalars['Int']['output'];
  /** 이메일 */
  email?: Maybe<Scalars['String']['output']>;
  /** UUID */
  id: Scalars['ID']['output'];
  /** 고유번호 */
  idx: Scalars['Int']['output'];
  /** 가입 날짜/시간 */
  joinedAt: Scalars['DateTime']['output'];
  /** 탈퇴 날짜/시간 */
  leavedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 닉네임 */
  nickname?: Maybe<Scalars['String']['output']>;
  /** 전화번호 */
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** 권한 타입 */
  role: UserRole;
  /** 소셜 서비스 연결 리스트 */
  socials: Array<Maybe<UserSocialLink>>;
  /** 상태 */
  state: UserState;
  /** 정지 처리된 시간 */
  suspendedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** 관리자가 올린 게시물 */
export type AdminPost = {
  /** 상태 */
  state: AdminPostState;
  /** 타입 */
  type: AdminPostType;
};

/** 관리자 게시글 클릭 액션 */
export enum AdminPostAction {
  /** URL 이동 */
  MoveUrl = 'MOVE_URL',
  /** 액션 없음 */
  None = 'NONE',
  /** 텍스트 표시 */
  Text = 'TEXT'
}

/** 관리자가 올린 게시물의 카테고리 */
export type AdminPostCategory = {
  __typename?: 'AdminPostCategory';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 카테고리 이름 */
  name: Scalars['String']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 관리자 게시물 카테고리 생성 데이터 */
export type AdminPostCategoryCreateInput = {
  /** 공개 여부 */
  isVisible: Scalars['Boolean']['input'];
  /** 이름 */
  name: Scalars['String']['input'];
  /** 우선 순위 */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /** 타입 */
  type: AdminPostType;
};

/** 관리자 게시물 카테고리 수정 데이터 */
export type AdminPostCategoryUpdateInput = {
  /** 공개 여부 */
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  /** 이름 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 우선 순위 */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /** 타입 */
  type?: InputMaybe<AdminPostType>;
};

/** 관리자가 올린 게시물 필터 데이터 */
export type AdminPostFilterInput = {
  /** 카테고리 ID */
  category__id?: InputMaybe<Array<IdFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 상태 */
  state?: InputMaybe<Array<AdminPostStateFilterInput>>;
  /** 타입 */
  type?: InputMaybe<Array<AdminPostTypeFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 관리자가 올린 게시물 목록 */
export type AdminPostList = {
  __typename?: 'AdminPostList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<AdminPostModelEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 관리자가 올린 게시물 */
export type AdminPostModel = {
  __typename?: 'AdminPostModel';
  /** 카테고리 */
  category?: Maybe<AdminPostCategory>;
  content?: Maybe<Scalars['String']['output']>;
  priority: Scalars['Float']['output'];
  publishingPeriodEndAt: Scalars['DateTime']['output'];
  publishingPeriodStartAt: Scalars['DateTime']['output'];
  /** 상태 */
  state: AdminPostState;
  title?: Maybe<Scalars['String']['output']>;
  /** 타입 */
  type: AdminPostType;
};

export type AdminPostModelEdge = {
  __typename?: 'AdminPostModelEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: AdminPostModel;
};

/** 관리자가 올린 게시물 정렬 데이터 */
export type AdminPostSortInput = {
  /** 카테고리 ID */
  category__id?: InputMaybe<SortInput>;
  /** 카테고리 이름 */
  category__name?: InputMaybe<SortInput>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 우선순위 */
  priority?: InputMaybe<SortInput>;
  /** 게시 종료일 */
  publishingPeriodEndAt?: InputMaybe<SortInput>;
  /** 게시 시작일 */
  publishingPeriodStartAt?: InputMaybe<SortInput>;
  /** 타입 */
  type?: InputMaybe<AdminPostTypeSortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 관리자가 올린 게시물 상태 */
export enum AdminPostState {
  /** 활성화 */
  Active = 'ACTIVE',
  /** 비활성화 */
  Inactive = 'INACTIVE'
}

export type AdminPostStateFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<AdminPostState>;
  values?: InputMaybe<Array<AdminPostState>>;
};

/** 관리자가 올린 게시물 타입 */
export enum AdminPostType {
  /** 배너 */
  Banner = 'BANNER',
  /** 이벤트 */
  Event = 'EVENT',
  /** 자주 묻는 질문 */
  Faq = 'FAQ',
  /** 공지사항 */
  Notice = 'NOTICE',
  /** 팝업 */
  Popup = 'POPUP'
}

export type AdminPostTypeFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<AdminPostType>;
  values?: InputMaybe<Array<AdminPostType>>;
};

export type AdminPostTypeSortInput = {
  case?: InputMaybe<Array<AdminPostType>>;
  nulls?: InputMaybe<Nulls>;
  order: Order;
};

/** 토큰 요청의 대한 응답 */
export type AuthTokenResponse = {
  __typename?: 'AuthTokenResponse';
  /** 접근 토큰 */
  accessToken: Scalars['String']['output'];
  /** 접근 토큰 만료 시간(초) */
  expiresIn: Scalars['Int']['output'];
  /** 갱신 토큰 */
  refreshToken: Scalars['String']['output'];
  /** 토큰 타입 */
  tokenType: Scalars['String']['output'];
};

/** 배너 */
export type Banner = AdminPost & {
  __typename?: 'Banner';
  /** 클릭 액션 */
  action: AdminPostAction;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 커버 이미지 */
  coverUrl: Scalars['String']['output'];
  /** 링크 URL */
  linkUrl?: Maybe<Scalars['String']['output']>;
  /** 우선순위 */
  priority?: Maybe<Scalars['Int']['output']>;
  /**
   * 게시 종료일
   * 없을시 2999-12-31 23:59:59.000 +0900 으로 생성
   */
  publishingPeriodEndAt: Scalars['DateTime']['output'];
  /**
   * 게시 시작일
   * 없을시 1990-01-01 00:00:00.000 +0900 으로 생성
   */
  publishingPeriodStartAt: Scalars['DateTime']['output'];
  /** 상태 */
  state: AdminPostState;
  /** 제목 */
  title: Scalars['String']['output'];
  /** 타입 */
  type: AdminPostType;
};

/** 배너 생성 데이터 */
export type BannerCreateInput = {
  /** 클릭 액션 */
  action: AdminPostAction;
  /** 카테고리 ID */
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content: Scalars['String']['input'];
  /** 커버 이미지 */
  coverUrl: Scalars['String']['input'];
  /** 이동 URL */
  linkUrl?: InputMaybe<Scalars['String']['input']>;
  /** 우선순위 */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /**
   * 게시 종료일
   * 없을시 2999-12-31 23:59:59.000 +0900 으로 생성
   */
  publishingPeriodEndAt: Scalars['DateTime']['input'];
  /**
   * 게시 시작일
   * 없을시 1990-01-01 00:00:00.000 +0900 으로 생성
   */
  publishingPeriodStartAt: Scalars['DateTime']['input'];
  /** 상태 */
  state?: InputMaybe<AdminPostState>;
  /** 제목 */
  title: Scalars['String']['input'];
};

/** 배너 수정 데이터 */
export type BannerUpdateInput = {
  /** 클릭 액션 */
  action?: InputMaybe<AdminPostAction>;
  /** 카테고리 ID */
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 커버 이미지 */
  coverUrl?: InputMaybe<Scalars['String']['input']>;
  /** 이동 URL */
  linkUrl?: InputMaybe<Scalars['String']['input']>;
  /** 우선순위 */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /**
   * 게시 종료일
   * 없을시 2999-12-31 23:59:59.000 +0900 으로 생성
   */
  publishingPeriodEndAt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * 게시 시작일
   * 없을시 1990-01-01 00:00:00.000 +0900 으로 생성
   */
  publishingPeriodStartAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** 상태 */
  state?: InputMaybe<AdminPostState>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** 논리(Boolean) 필터 */
export type BooleanFilterInput = {
  operator: BooleanFilterOperators;
  value?: InputMaybe<Scalars['Boolean']['input']>;
};

/** 논리 필터 연산자 */
export enum BooleanFilterOperators {
  Equal = 'EQUAL',
  IsNotNull = 'IS_NOT_NULL',
  IsNull = 'IS_NULL',
  NotEqual = 'NOT_EQUAL'
}

export type CategoryFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<ReportCategoryEnumType>;
  values?: InputMaybe<Array<ReportCategoryEnumType>>;
};

/** 커뮤니티 게시물 */
export type CommunityPost = {
  __typename?: 'CommunityPost';
  /** 작성자 */
  author: Member;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  deepLinkUrl?: Maybe<Scalars['String']['output']>;
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 이미지, 영상 목록 */
  files?: Maybe<Array<File>>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 해당 게시물 숨기기 여부 */
  isHide: Scalars['Boolean']['output'];
  /** 나의 좋아요 여부 */
  isLike: Scalars['Boolean']['output'];
  isPinned?: Maybe<Scalars['Boolean']['output']>;
  /** 좋아요 수 */
  likeCount: Scalars['Int']['output'];
  pinnedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 댓글 수 */
  replyCount: Scalars['Int']['output'];
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
  /** 조회수 */
  viewCount: Scalars['Int']['output'];
};

/** 커뮤니티 게시물 생성 */
export type CommunityPostCreateInput = {
  /** 내용 */
  content: Scalars['String']['input'];
  /** 게시물 파일들 */
  file__ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** 모임 id */
  gathering__id: Scalars['ID']['input'];
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CommunityPostEdge = {
  __typename?: 'CommunityPostEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: CommunityPost;
};

/** 커뮤니티 게시물 필터 */
export type CommunityPostFilterInput = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 게시물 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 상단 고정 여부 */
  isPinned?: InputMaybe<Array<BooleanFilterInput>>;
  /** 좋아요 사용자 고유 id */
  likes__id?: InputMaybe<Array<IdFilterInput>>;
  /** 게시물 제목 */
  title?: InputMaybe<Array<StringFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 커뮤니티 게시물 목록 */
export type CommunityPostList = {
  __typename?: 'CommunityPostList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<CommunityPostEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 커뮤니티 게시물 정렬 */
export type CommunityPostOrderByInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 좋아요수 */
  likeCount?: InputMaybe<SortInput>;
  /** 상단 고정된 날짜 */
  pinnedAt?: InputMaybe<SortInput>;
  /** 댓글수 */
  replyCount?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
  /** 조회수 정렬 */
  viewCount?: InputMaybe<SortInput>;
};

/** 커뮤니티 게시물 댓글 */
export type CommunityPostReply = {
  __typename?: 'CommunityPostReply';
  /** 작성자 */
  author: Member;
  /** 댓글 내용 */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 대댓글단 댓글 */
  parent?: Maybe<CommunityPostReply>;
  /** 대댓글 조회 */
  replies?: Maybe<Array<CommunityPostReply>>;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 커뮤니티 게시물 댓글 생성 */
export type CommunityPostReplyCreateInput = {
  /** 댓글 내용 */
  content: Scalars['String']['input'];
  /** 상위 댓글 uuid (대댓글일 경우만) */
  parent__id?: InputMaybe<Scalars['ID']['input']>;
  /** 게시물 uuid (댓글일 경우만) */
  post__id?: InputMaybe<Scalars['ID']['input']>;
};

export type CommunityPostReplyEdge = {
  __typename?: 'CommunityPostReplyEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: CommunityPostReply;
};

/** 커뮤니티 게시물 댓글 필터 */
export type CommunityPostReplyFilterInput = {
  /** 작성자 uuid */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 댓글 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 대댓글일 경우 상위 댓글 uuid */
  parent__id?: InputMaybe<Array<IdFilterInput>>;
  /** 관련 게시물 uuid */
  post__id?: InputMaybe<Array<IdFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 커뮤니티 게시물 댓글 목록 */
export type CommunityPostReplyList = {
  __typename?: 'CommunityPostReplyList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<CommunityPostReplyEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 커뮤니티 게시물 댓글 정렬 */
export type CommunityPostReplyOrderByInput = {
  /** 댓글 내용 정렬 */
  content?: InputMaybe<SortInput>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 커뮤니티 게시물 댓글 수정 */
export type CommunityPostReplyUpdateInput = {
  /** 댓글 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
};

/** 커뮤니티 게시물 수정 */
export type CommunityPostUpdateInput = {
  /** 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 모임 id */
  gathering__id?: InputMaybe<Scalars['ID']['input']>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** 커뮤니티 신고 모델 */
export type CommunityReport = {
  __typename?: 'CommunityReport';
  /** 관리자 메모 */
  adminMemo: Scalars['String']['output'];
  /** 작성자 */
  author: Member;
  /** 신고 카테고리 */
  category?: Maybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기타 예비용 필드 */
  etc?: Maybe<Scalars['String']['output']>;
  /** 신고 파일 */
  files?: Maybe<Array<File>>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 신고 상태 */
  state?: Maybe<CommunityReportStateEnumType>;
  /** 신고 커뮤니티 타겟 */
  targetId?: Maybe<Scalars['String']['output']>;
  /** 신고 타겟 데이터 */
  targetInfo?: Maybe<CommunityReportTarget>;
  /** 신고 종류 */
  type?: Maybe<CommunityReportType>;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

export enum CommunityReportCategoryEnumType {
  /** 욕설 */
  Abusive = 'ABUSIVE',
  /** 기타 */
  Etc = 'ETC',
  /** 선정성 */
  Sensuality = 'SENSUALITY'
}

export type CommunityReportCategoryFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<CommunityReportCategoryEnumType>;
  values?: InputMaybe<Array<CommunityReportCategoryEnumType>>;
};

/** 커뮤니티 신고 생성 */
export type CommunityReportCreateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
  /** 게시물 파일들 */
  file__ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** 신고 커뮤니티 타겟 */
  targetId?: InputMaybe<Scalars['String']['input']>;
  /** 신고 종류 */
  type?: InputMaybe<CommunityReportType>;
};

export type CommunityReportEdge = {
  __typename?: 'CommunityReportEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: CommunityReport;
};

/** 커뮤니티 신고 필터 */
export type CommunityReportFilterInput = {
  /** 작성자 이메일 */
  author__email?: InputMaybe<Array<StringFilterInput>>;
  /** 작성자 고유 id */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 작성자 이름 */
  author__name?: InputMaybe<Array<StringFilterInput>>;
  /** 신고 카테고리 */
  category?: InputMaybe<Array<CommunityReportCategoryFilterInput>>;
  /** 신고 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 기타 */
  etc?: InputMaybe<Array<StringFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 신고 상태 */
  state?: InputMaybe<Array<CommunityReportStateFilterInput>>;
  /** 신고 타입 */
  type?: InputMaybe<Array<CommunityReportTypeFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 커뮤니티 신고 목록 */
export type CommunityReportList = {
  __typename?: 'CommunityReportList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<CommunityReportEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 커뮤니티 신고 정렬 */
export type CommunityReportOrderByInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

export enum CommunityReportStateEnumType {
  /** 완료 */
  Complete = 'COMPLETE',
  /** 대기중 */
  Pending = 'PENDING',
  /** 처리중 */
  Processing = 'PROCESSING'
}

export type CommunityReportStateFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<CommunityReportStateEnumType>;
  values?: InputMaybe<Array<CommunityReportStateEnumType>>;
};

export type CommunityReportTarget = CommunityPost | CommunityPostReply;

export enum CommunityReportType {
  /** 게시글 */
  Post = 'POST',
  /** 댓글 */
  Replt = 'REPLT'
}

export type CommunityReportTypeFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<CommunityReportType>;
  values?: InputMaybe<Array<CommunityReportType>>;
};

/** 커뮤니티 신고 수정 */
export type CommunityReportUpdateInput = {
  /** 신고 카테고리 */
  category?: InputMaybe<CommunityReportCategoryEnumType>;
  /** 신고 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 기타 예비용 필드 */
  etc?: InputMaybe<Scalars['String']['input']>;
  /** 신고 커뮤니티 타겟 */
  targetId?: InputMaybe<Scalars['String']['input']>;
  /** 신고 종류 */
  type?: InputMaybe<CommunityReportType>;
};

/** 날짜(DateTime) 필터 */
export type DateTimeFilterInput = {
  operator: NumberFilterOperators;
  value?: InputMaybe<Scalars['DateTime']['input']>;
  value2?: InputMaybe<Scalars['DateTime']['input']>;
  values?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Enum 필터 연산자 */
export enum EnumFilterOperators {
  Equal = 'EQUAL',
  In = 'IN',
  IsNotNull = 'IS_NOT_NULL',
  IsNull = 'IS_NULL',
  NotEqual = 'NOT_EQUAL',
  NotIn = 'NOT_IN'
}

/** 이벤트 */
export type Event = AdminPost & {
  __typename?: 'Event';
  /** 클릭 액션 */
  action: AdminPostAction;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 커버 이미지 */
  coverUrl: Scalars['String']['output'];
  /** 링크 URL */
  linkUrl?: Maybe<Scalars['String']['output']>;
  /** 우선순위 */
  priority?: Maybe<Scalars['Int']['output']>;
  /**
   * 게시 종료일
   * 없을시 2999-12-31 23:59:59.000 +0900 으로 생성
   */
  publishingPeriodEndAt: Scalars['DateTime']['output'];
  /**
   * 게시 시작일
   * 없을시 1990-01-01 00:00:00.000 +0900 으로 생성
   */
  publishingPeriodStartAt: Scalars['DateTime']['output'];
  /** 상태 */
  state: AdminPostState;
  /** 제목 */
  title: Scalars['String']['output'];
  /** 타입 */
  type: AdminPostType;
};

/** 이벤트 생성 데이터 */
export type EventCreateInput = {
  /** 클릭 액션 */
  action: AdminPostAction;
  /** 카테고리 ID */
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content: Scalars['String']['input'];
  /** 커버 이미지 */
  coverUrl: Scalars['String']['input'];
  /** 이동 URL */
  linkUrl?: InputMaybe<Scalars['String']['input']>;
  /** 우선순위 */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /**
   * 게시 종료일
   * 없을시 2999-12-31 23:59:59.000 +0900 으로 생성
   */
  publishingPeriodEndAt: Scalars['DateTime']['input'];
  /**
   * 게시 시작일
   * 없을시 1990-01-01 00:00:00.000 +0900 으로 생성
   */
  publishingPeriodStartAt: Scalars['DateTime']['input'];
  /** 상태 */
  state?: InputMaybe<AdminPostState>;
  /** 제목 */
  title: Scalars['String']['input'];
};

/** 이벤트 수정 데이터 */
export type EventUpdateInput = {
  /** 클릭 액션 */
  action?: InputMaybe<AdminPostAction>;
  /** 카테고리 ID */
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 커버 이미지 */
  coverUrl?: InputMaybe<Scalars['String']['input']>;
  /** 이동 URL */
  linkUrl?: InputMaybe<Scalars['String']['input']>;
  /** 우선순위 */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /**
   * 게시 종료일
   * 없을시 2999-12-31 23:59:59.000 +0900 으로 생성
   */
  publishingPeriodEndAt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * 게시 시작일
   * 없을시 1990-01-01 00:00:00.000 +0900 으로 생성
   */
  publishingPeriodStartAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** 상태 */
  state?: InputMaybe<AdminPostState>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** 자주 묻는 질문 */
export type Faq = AdminPost & {
  __typename?: 'Faq';
  /** 답변 */
  answer: Scalars['String']['output'];
  /** 우선순위 */
  priority: Scalars['Int']['output'];
  /** 질문 */
  question: Scalars['String']['output'];
  /** 상태 */
  state: AdminPostState;
  /** 타입 */
  type: AdminPostType;
};

/** 자주 묻는 질문 생성 데이터 */
export type FaqCreateInput = {
  /** 답변 */
  answer: Scalars['String']['input'];
  /** 카테고리 ID */
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /** 우선순위 */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /** 질문 */
  question: Scalars['String']['input'];
  /** 상태 */
  state?: InputMaybe<AdminPostState>;
};

/** 자주 묻는 질문 수정 데이터 */
export type FaqUpdateInput = {
  /** 답변 */
  answer?: InputMaybe<Scalars['String']['input']>;
  /** 카테고리 ID */
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /** 우선순위 */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /** 질문 */
  question?: InputMaybe<Scalars['String']['input']>;
  /** 상태 */
  state?: InputMaybe<AdminPostState>;
};

/** Fcm토큰 OS */
export enum FcmTokenOsEnum {
  /** AOS */
  Android = 'ANDROID',
  /** iOS */
  Ios = 'IOS',
  /** web */
  Web = 'WEB'
}

/** 파일 */
export type File = {
  __typename?: 'File';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 원본 이름 */
  filename: Scalars['String']['output'];
  /** 고화질 URL (1080px) */
  highQualityURL?: Maybe<Scalars['String']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 저화질 URL (480px) */
  lowQualityURL?: Maybe<Scalars['String']['output']>;
  /** MD5 체크섬 */
  md5: Scalars['String']['output'];
  /** MIME 타입 */
  mimetype: Scalars['String']['output'];
  /** 우선 순위 (정렬용) */
  priority: Scalars['Int']['output'];
  /** 파일 크기 (바이트) */
  size: Scalars['Int']['output'];
  /** 썸네일용 URL (240px) */
  thumbnailURL?: Maybe<Scalars['String']['output']>;
  /** 원본 URL */
  url: Scalars['String']['output'];
};

export type Gathering = {
  __typename?: 'Gathering';
  /** 모집인원 */
  capacity: Scalars['Float']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 소개 */
  introduction?: Maybe<Scalars['String']['output']>;
  /** 가입방법 */
  joinWay: GatheringJoinWayEnum;
  /** 모임 종류 */
  kind: GatheringKindEnum;
  /** 모임명 */
  title: Scalars['String']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

export type GatheringCategory = {
  __typename?: 'GatheringCategory';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

export type GatheringCategoryCreateInputForAdmin = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** 기본 키(UUID) */
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GatheringCategoryEdge = {
  __typename?: 'GatheringCategoryEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: GatheringCategory;
};

export type GatheringCategoryFilterInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  name?: InputMaybe<Array<StringFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

export type GatheringCategoryList = {
  __typename?: 'GatheringCategoryList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<GatheringCategoryEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

export type GatheringCategorySortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  name?: InputMaybe<Array<SortInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

export type GatheringCategoryUpdateInputForAdmin = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** 기본 키(UUID) */
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GatheringCreateInput = {
  /** 모집인원 */
  capacity: Scalars['Float']['input'];
  category__id: Scalars['ID']['input'];
  /** 소개 */
  introduction?: InputMaybe<Scalars['String']['input']>;
  /** 가입방법 */
  joinWay: GatheringJoinWayEnum;
  /** 모임 종류 */
  kind: GatheringKindEnum;
  /** file id */
  thumbnail__id: Scalars['ID']['input'];
  /** 모임명 */
  title: Scalars['String']['input'];
  type__ids: Array<Scalars['ID']['input']>;
};

export type GatheringEdge = {
  __typename?: 'GatheringEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: Gathering;
};

export type GatheringFilterInput = {
  /** 모집인원 */
  capacity?: InputMaybe<Array<IntFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 소개 */
  introduction?: InputMaybe<Scalars['String']['input']>;
  /** 가입방법 */
  joinWay?: InputMaybe<Array<GatheringJoinWayFilterInput>>;
  /** 모임 종류 */
  kind?: InputMaybe<Array<GatheringKindFilterInput>>;
  /** 모임명 */
  title?: InputMaybe<Array<StringFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

export type GatheringFirstScheduleCreateInput = {
  /** 모임 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 모임 날짜, yyyyMMdd */
  gatheringDate: Scalars['String']['input'];
  /** 모임 주소 */
  locationAddress: Scalars['String']['input'];
  /** 모임 장소 */
  locationName: Scalars['String']['input'];
};

export enum GatheringJoinWayEnum {
  /** 승인제 */
  Approval = 'APPROVAL',
  /** 선착순 */
  Fcfs = 'FCFS'
}

export type GatheringJoinWayFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<GatheringJoinWayEnum>;
  values?: InputMaybe<Array<GatheringJoinWayEnum>>;
};

export enum GatheringKindEnum {
  /** 일일모임 */
  Daily = 'DAILY',
  /** 정기모임 */
  Regular = 'REGULAR'
}

export type GatheringKindFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<GatheringKindEnum>;
  values?: InputMaybe<Array<GatheringKindEnum>>;
};

export type GatheringList = {
  __typename?: 'GatheringList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<GatheringEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

export type GatheringParticipant = {
  __typename?: 'GatheringParticipant';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  role: GatheringParticipantRoleEnum;
  state: GatheringParticipantStateEnum;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

export type GatheringParticipantEdge = {
  __typename?: 'GatheringParticipantEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: GatheringParticipant;
};

export enum GatheringParticipantRoleEnum {
  /** 모임원 */
  Member = 'MEMBER',
  /** 모임장 */
  President = 'PRESIDENT'
}

export enum GatheringParticipantStateEnum {
  /** 활동중 */
  Active = 'ACTIVE',
  /** 승인 대기중 */
  Pending = 'PENDING'
}

export type GatheringSchedule = {
  __typename?: 'GatheringSchedule';
  /** 모임 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 모임 날짜, yyyyMMdd */
  gatheringDate: Scalars['String']['output'];
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 모임 주소 */
  locationAddress: Scalars['String']['output'];
  /** 모임 장소 */
  locationName: Scalars['String']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

export type GatheringScheduleEdge = {
  __typename?: 'GatheringScheduleEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: GatheringSchedule;
};

export type GatheringSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

export type GatheringType = {
  __typename?: 'GatheringType';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

export type GatheringTypeCreateInputForAdmin = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** 기본 키(UUID) */
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GatheringTypeEdge = {
  __typename?: 'GatheringTypeEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: GatheringType;
};

export type GatheringTypeFilterInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  name?: InputMaybe<Array<StringFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

export type GatheringTypeList = {
  __typename?: 'GatheringTypeList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<GatheringTypeEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

export type GatheringTypeSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  name?: InputMaybe<Array<SortInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

export type GatheringTypeUpdateInputForAdmin = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** 기본 키(UUID) */
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GatheringUpdateInput = {
  /** 모집인원 */
  capacity?: InputMaybe<Scalars['Float']['input']>;
  /** 소개 */
  introduction?: InputMaybe<Scalars['String']['input']>;
  /** file id */
  thumbnail__id?: InputMaybe<Scalars['ID']['input']>;
  /** 모임명 */
  title?: InputMaybe<Scalars['String']['input']>;
  type__ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** ID 필터 */
export type IdFilterInput = {
  operator: IdFilterOperators;
  value?: InputMaybe<Scalars['ID']['input']>;
  values?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** ID 필터 연산자 */
export enum IdFilterOperators {
  Equal = 'EQUAL',
  In = 'IN',
  IsNotNull = 'IS_NOT_NULL',
  IsNull = 'IS_NULL',
  NotEqual = 'NOT_EQUAL',
  NotIn = 'NOT_IN'
}

/** 문의하기 데이터 */
export type Inquire = {
  __typename?: 'Inquire';
  /** 관리자용 유저 메모 */
  adminMemo?: Maybe<Scalars['String']['output']>;
  /** 답변 */
  answerContent?: Maybe<Scalars['String']['output']>;
  /** 답변일 */
  answereddAt?: Maybe<Scalars['DateTime']['output']>;
  /** 작성자 */
  author: Member;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 문의 파일 */
  files?: Maybe<Array<File>>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 문의 상태 */
  state: InquireState;
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
  /** 문의 종류 */
  type: InquireType;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

/** 문의하기 생성 */
export type InquireCreateInput = {
  /** 내용 */
  content: Scalars['String']['input'];
  fileIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
  /** 문의 종류 */
  type?: InputMaybe<InquireType>;
};

export type InquireEdge = {
  __typename?: 'InquireEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: Inquire;
};

/** 문의하기 필터링 */
export type InquireFilterInput = {
  /** 답변 */
  answerContent?: InputMaybe<Array<StringFilterInput>>;
  /** 답변일 */
  answereddAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 내용 */
  content?: InputMaybe<Array<StringFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 문의 상태 */
  state?: InputMaybe<Array<InquireStateFilterInput>>;
  /** 제목 */
  title?: InputMaybe<Array<StringFilterInput>>;
  /** 문의 종류 */
  type?: InputMaybe<Array<InquireTypeFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 문의하기 목록 */
export type InquireList = {
  __typename?: 'InquireList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<InquireEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 문의하기 정렬 */
export type InquireSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

/** 문의 상태 */
export enum InquireState {
  /** 답변 대기중 */
  Active = 'ACTIVE',
  /** 답변 완료 */
  Answered = 'ANSWERED',
  /** 확인중 / 진행중 */
  Checking = 'CHECKING'
}

export type InquireStateFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<InquireState>;
  values?: InputMaybe<Array<InquireState>>;
};

/** 문의 종류 */
export enum InquireType {
  /** 일반 */
  Common = 'COMMON'
}

export type InquireTypeFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<InquireType>;
  values?: InputMaybe<Array<InquireType>>;
};

/** 문의하기 수정 */
export type InquireUpdateInput = {
  /** 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  fileIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
  /** 문의 종류 */
  type?: InputMaybe<InquireType>;
};

/** 문의하기 수정 - 관리자용 */
export type InquireUpdateInputForAdmin = {
  /** 관리자 메모 */
  adminMemo?: InputMaybe<Scalars['String']['input']>;
};

/** 정수(Int) 필터 */
export type IntFilterInput = {
  operator: NumberFilterOperators;
  value?: InputMaybe<Scalars['Int']['input']>;
  value2?: InputMaybe<Scalars['Int']['input']>;
  values?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** 정수 정렬 */
export type IntSortInput = {
  case?: InputMaybe<Array<Scalars['Int']['input']>>;
  nulls?: InputMaybe<Nulls>;
  order: Order;
};

/** 카카오 Access Token */
export type KakaoAccessData = {
  __typename?: 'KakaoAccessData';
  /** 가입된 계정인지? */
  isJoin: Scalars['Boolean']['output'];
  /** 발급 JWT 토큰 */
  jwtData: KakaoJwtData;
};

/** 카카오 JWT Data */
export type KakaoJwtData = {
  __typename?: 'KakaoJWTData';
  access_token: Scalars['String']['output'];
  expires_in: Scalars['Float']['output'];
  refresh_token: Scalars['String']['output'];
  refresh_token_expires_in: Scalars['Float']['output'];
  scope: Scalars['String']['output'];
  token_type: Scalars['String']['output'];
};

export enum LeaveReasonEnum {
  Be = 'BE',
  Changed = 'CHANGED',
  To = 'TO'
}

/** 일반 사용자 */
export type Member = User & {
  __typename?: 'Member';
  /** 관리자용 유저 메모 */
  adminMemo?: Maybe<Scalars['String']['output']>;
  communityPostCount: Scalars['Int']['output'];
  communityPostHideCount: Scalars['Int']['output'];
  communityPostLikeCount: Scalars['Int']['output'];
  /** 이메일 */
  email?: Maybe<Scalars['String']['output']>;
  /** UUID */
  id: Scalars['ID']['output'];
  /** 고유번호 */
  idx: Scalars['Int']['output'];
  /** 가입 날짜/시간 */
  joinedAt: Scalars['DateTime']['output'];
  /** 탈퇴 날짜/시간 */
  leavedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 닉네임 */
  nickname?: Maybe<Scalars['String']['output']>;
  /** 알림 설정 */
  notificationSetting: UserNotificationSetting;
  /** 전화번호 */
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** 권한 타입 */
  role: UserRole;
  /** 소셜 서비스 연결 리스트 */
  socials: Array<Maybe<UserSocialLink>>;
  /** 상태 */
  state: UserState;
  /** 정지 처리된 시간 */
  suspendedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** 커뮤니티 게시물 숨기기 */
  addCommunityPostHide: CommunityPost;
  /** 커뮤니티 게시물 좋아요 */
  addCommunityPostLike: CommunityPost;
  /**
   * 문의 답변하기 - 관리자용
   *
   * **에러 코드**
   * - `NOT_FOUND`: 존재하지 않는 문의입니다.
   * - `BAD_REQUEST` : 이미 답변한 문의입니다.
   */
  answerInquireForAdmin: Inquire;
  /** 사용자를 차단하거나 해제합니다. */
  blockUser: Member;
  /**
   * 사용자들을 차단하거나 해제합니다.
   * 이미 차단 혹은 해제된 상태이면 무시합니다.
   * 반환값은 처리된 userIds의 정보입니다.
   */
  blockUsers: Array<Member>;
  /**
   * 문의 상태변경하기 - 관리자용
   *
   * **에러 코드**
   * - `NOT_FOUND`: 존재하지 않는 문의입니다.
   * - `BAD_REQUEST` : 이미 답변한 문의입니다.
   */
  changeInquireStateForAdmin: Inquire;
  createAdminPostCategory: AdminPostCategory;
  /**
   * 배너를 생성합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  createBannerForAdmin: Notice;
  /** 커뮤니티 게시물 생성 */
  createCommunityPost: CommunityPost;
  /** 커뮤니티 게시물 댓글 생성 */
  createCommunityPostReply: CommunityPostReply;
  /** 커뮤니티 신고 생성 */
  createCommunityReport: CommunityReport;
  /**
   * 이벤트를 생성합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  createEventForAdmin: Notice;
  /**
   * 자주 묻는 질문을 생성합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  createFaqForAdmin: Faq;
  createGathering: Gathering;
  createGatheringCategoryForAdmin: GatheringCategory;
  createGatheringTypeForAdmin: GatheringType;
  /** 문의 생성하기 */
  createInquire: Inquire;
  /**
   * 공지사항을 생성합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  createNoticeForAdmin: Notice;
  /**
   * 알림 저장소를 생성합니다 - 관리자 권한
   *
   * **에러 코드**
   * - `BAD_REQUEWST`: SPECIFIC은 recipient_ids가 필수 입니다.
   */
  createNotificationStoreForAdmin: NotificationStorageModel;
  createPet: Pet;
  /**
   * 팝업을 생성합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  createPopupForAdmin: Notice;
  /**
   * 신고를 생성합니다. 사용자가 신고 기능을 사용하고 싶을 때 사용합니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   * - `BAD_USER_INPUT`: 신고 내용은 500자 이하로 입력해주세요.
   */
  createReport: Report;
  createTermsOfServiceForAdmin: TermsOfService;
  deleteAdminPostCategory: AdminPostCategory;
  /**
   * 배너를 삭제합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 게시물을 찾을 수 없습니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  deleteBannerForAdmin: Notice;
  /** 커뮤니티 게시물 단일 삭제 */
  deleteCommunityPost: CommunityPost;
  /** 커뮤니티 게시물 숨기기 취소(제거) */
  deleteCommunityPostHide: CommunityPost;
  /** 커뮤니티 게시물 좋아요 취소(제거) */
  deleteCommunityPostLike: CommunityPost;
  /** 커뮤니티 게시물 댓글 단일 삭제 */
  deleteCommunityPostReply: CommunityPostReply;
  /** 커뮤니티 게시물 복수 삭제 관리자 전용 */
  deleteCommunityPostsForAdmin: Array<CommunityPost>;
  /** 커뮤니티 신고 단일 삭제 */
  deleteCommunityReport: CommunityReport;
  /**
   * 이벤트를 삭제합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 게시물을 찾을 수 없습니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  deleteEventForAdmin: Notice;
  /**
   * 자주 묻는 질문을 삭제합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 게시물을 찾을 수 없습니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  deleteFaqForAdmin: Faq;
  /**
   * 자주 묻는 질문을 여러 개 삭제합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  deleteFaqsForAdmin: Array<Faq>;
  deleteGathering: Gathering;
  deleteGatheringCategoryForAdmin: GatheringCategory;
  deleteGatheringTypeForAdmin: GatheringType;
  /**
   * 문의 삭제하기
   *
   * **에러 코드**
   * - `NOT_FOUND`: 존재하지 않는 문의입니다.
   * - `BAD_REQUEST`: 삭제가 불가능한 상태입니다.
   */
  deleteInquire: Inquire;
  /** 커뮤니티 게시물 댓글 복수 삭제 - 관리자용 */
  deleteManyCommunityPostRepliesForAdmin: Array<CommunityPostReply>;
  /** 신고 내역 복수 삭제 */
  deleteManyReportsForAdmin: Array<Report>;
  /**
   * 공지사항을 삭제합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 게시물을 찾을 수 없습니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  deleteNoticeForAdmin: Notice;
  /**
   * 알림 저장소를 삭제합니다 - 관리자 권한
   *
   * **에러 코드**
   * - `BAD_REQUEWST`: 이미 전송된 알림입니다.
   * - `NOT_FOUND`: 없는 데이터
   */
  deleteNotificationStoreForAdmin: NotificationStorageModel;
  deletePet: Pet;
  /**
   * 팝업을 삭제합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 게시물을 찾을 수 없습니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  deletePopupForAdmin: Notice;
  /** 신고 내역 단일 삭제 */
  deleteReportForAdmin: Report;
  deleteTermsOfServiceForAdmin: TermsOfService;
  /** 카카오 access token 요청 */
  getKakaoAccessToken: KakaoAccessData;
  /**
   * 탈퇴 처리
   * **에러 코드**
   * - NOT_FOUND: 권한이 없습니다.
   */
  leaveUser: Member;
  /**
   * 특정 유저를 탈퇴처리합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 없는 유저.
   */
  leavingUserForAdmin: Member;
  /**
   * 이미 가입된 계정에 애플 소셜 계정을 연결합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 애플 계정입니다.
   */
  linkApple: Member;
  /**
   * 이미 가입된 계정에 구글 소셜 계정을 연결합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 구글 계정입니다.
   */
  linkGoogle: Member;
  /**
   * 이미 가입된 계정에 카카오 소셜 계정을 연결합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 카카오 계정입니다.
   */
  linkKakao: Member;
  /**
   * 이미 가입된 계정에 네이버 소셜 계정을 연결합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 네이버 계정입니다.
   */
  linkNaver: Member;
  /** 커뮤니티 게시물 상단 고정 관리자 전용 */
  pinCommunityPostsForAdmin: Array<CommunityPost>;
  /**
   * 모든 알림을 읽음 처리합니다.
   *
   * 읽음처리한 개수를 반환
   */
  readAllNotification: Scalars['Float']['output'];
  /**
   * 특정 알림을 읽음 처리합니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   * - `NOT_FOUND`: 해당 사용자를 찾을 수 없습니다.
   */
  readNotification: Notification;
  /**
   * 갱신 토큰으로 토큰을 새로 발급받습니다. 갱신 토큰도 일정 기간이 지난 경우에는 새로 발급됩니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 만료된 갱신 토큰입니다.
   */
  refreshToken: AuthTokenResponse;
  /**
   * 추가되있는 FCM 토큰을 삭제합니다. 내가 추가한 FCM 토큰만 가능합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 찾을 수 없습니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  removeFCMToken: UserFcmToken;
  /** 전화번호 인증 요청 */
  requestAuthNumber?: Maybe<Scalars['String']['output']>;
  /** 임의 알림을 생성합니다. 관리자만 허용됩니다. */
  sendNotificationForAdmin: Notification;
  /**
   * 알림 저장소에 해당하는 알림을 전송합니다 - 관리자 권한
   *
   * **에러 코드**
   * - `BAD_REQUEWST`: 이미 전송된 알림입니다.
   * - `NOT_FOUND`: 없는 데이터
   */
  sendNotificationStoreForAdmin: NotificationStorageModel;
  /**
   * 나 자신의 사용자에게 FCM 토큰을 추가합니다. 이미 추가된 적이 있는 토큰인 경우, 시간 갱신만 이루어집니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  setFCMToken: UserFcmToken;
  /**
   * 사용자 이름(아이디)으로 로그인합니다.
   *
   * **에러 목록**
   * - `UNAUTHENTICATED`: 아이디 또는 비밀번호가 틀렸습니다.
   */
  signIn: AuthTokenResponse;
  /**
   * 애플 소셜 계정을 이용하여 로그인합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 애플 계정입니다.
   * - `NOT_FOUND`: 가입하지 않은 계정입니다.
   */
  signInApple: AuthTokenResponse;
  /**
   * 구글 소셜 계정을 이용하여 로그인합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 구글 계정입니다.
   * - `NOT_FOUND`: 가입하지 않은 계정입니다.
   */
  signInGoogle: AuthTokenResponse;
  /**
   * 카카오 소셜 계정을 이용하여 로그인합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 카카오 계정입니다.
   * - `NOT_FOUND`: 가입하지 않은 계정입니다.
   */
  signInKakao: AuthTokenResponse;
  /**
   * 네이버 소셜 계정을 이용하여 로그인합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 네이버 계정입니다.
   * - `NOT_FOUND`: 가입하지 않은 계정입니다.
   */
  signInNaver: AuthTokenResponse;
  /**
   * 회원가입하여 사용자를 생성합니다. email 또는 name이 반드시 있어야합니다.
   *
   * **에러 목록**
   * - `BAD_USER_INPUT` (EMAIL_OR_NAME_REQUIRED): email 또는 name이 반드시 있어야합니다.
   * - `BAD_USER_INPUT`: 데이터 유효성 검증 에러
   */
  signUp: SignUpResult;
  /**
   * 애플 소셜 계정을 이용하여 회원가입합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 애플 계정입니다.
   * - `NOT_FOUND`: 가입하지 않은 계정입니다.
   */
  signUpApple: SignUpResult;
  /**
   * 구글 소셜 계정을 이용하여 회원가입합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 구글 계정입니다.
   */
  signUpGoogle: SignUpResult;
  /**
   * 카카오 소셜 계정을 이용하여 회원가입합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 카카오 계정입니다.
   */
  signUpKakao: SignUpResult;
  /**
   * 네이버 소셜 계정을 이용하여 회원가입합니다.
   *
   * **에러 코드**
   * - `UNAUTHENTICATED`: 잘못된 네이버 계정입니다.
   */
  signUpNaver: SignUpResult;
  /**
   * 특정 유저를 정지처리합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 없는 유저.
   */
  suspendUser: Member;
  toggleGatheringLike: Gathering;
  updateAdminPostCategory: AdminPostCategory;
  /**
   * 배너를 수정합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 게시물을 찾을 수 없습니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  updateBannerForAdmin: Notice;
  /** 커뮤니티 게시물 수정 */
  updateCommunityPost: CommunityPost;
  /** 커뮤니티 게시물 파일 변경 */
  updateCommunityPostFiles: CommunityPost;
  /** 커뮤니티 게시물 댓글 수정 */
  updateCommunityPostReply: CommunityPostReply;
  /** 커뮤니티 게시물 수정 */
  updateCommunityReport: CommunityReport;
  /** 커뮤니티 신고물 파일 변경 */
  updateCommunityReportFiles: CommunityReport;
  /** 커뮤니티 신고 변경 - 관리자용 */
  updateCommunityReportForAdmin: CommunityReport;
  /**
   * 이벤트를 수정합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 게시물을 찾을 수 없습니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  updateEventForAdmin: Notice;
  /**
   * 자주 묻는 질문을 수정합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 게시물을 찾을 수 없습니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  updateFaqForAdmin: Faq;
  updateGathering: Gathering;
  updateGatheringCategoryForAdmin: GatheringCategory;
  updateGatheringTypeForAdmin: GatheringType;
  /**
   * 문의 수정하기
   *
   * **에러 코드**
   * - `NOT_FOUND`: 존재하지 않는 문의입니다.
   * - `BAD_REQUEST`: 수정이 불가능한 상태입니다.
   */
  updateInquire: Inquire;
  /**
   * 문의 수정하기 - 관리자용
   *
   * **에러 코드**
   * - `NOT_FOUND`: 존재하지 않는 문의입니다.
   */
  updateInquireForAdmin: Inquire;
  /** 복수 신고 내역 일괄 수정 (파일 수정 제외) */
  updateManyReportForAdmin: Array<Report>;
  /** 알림 설정 수정 */
  updateMyNotificationSetting: Member;
  /**
   * 공지사항을 수정합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 게시물을 찾을 수 없습니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  updateNoticeForAdmin: Notice;
  /**
   * 알림 저장소를 수정합니다 - 관리자 권한
   *
   * **에러 코드**
   * - `BAD_REQUEWST`: SPECIFIC은 recipient_ids가 필수 입니다.
   * - `BAD_REQUEWST`: 이미 전송된 알림입니다.
   * - `NOT_FOUND`: 없는 데이터
   */
  updateNotificationStoreForAdmin: NotificationStorageModel;
  updatePet: Pet;
  /**
   * 팝업을 수정합니다. 관리자만 허용합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 게시물을 찾을 수 없습니다.
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  updatePopupForAdmin: Notice;
  /** 신고 내역 단일 수정 (파일 수정 제외) */
  updateReportForAdmin: Report;
  /** 서비스 운영 정보 수정 - 관리자용 */
  updateServiceManage: ServiceManage;
  updateTermsOfServiceForAdmin: TermsOfService;
  /**
   * 특정 유저의 관리자 메모를 변경합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 없는 유저.
   */
  updateUserAdminMemo: Scalars['String']['output'];
  /**
   * 유저 정보 변경 - 관리자 권한
   *
   *   **에러 코드**
   * - `NOT_FOUND`: 없는 유저.
   */
  updateUserForAdmin: Member;
  /** 전화번호 인증 확인 */
  validateAuthNumber: Scalars['String']['output'];
};


export type MutationAddCommunityPostHideArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddCommunityPostLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAnswerInquireForAdminArgs = {
  answerContent: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};


export type MutationBlockUserArgs = {
  isBlocking: Scalars['Boolean']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationBlockUsersArgs = {
  isBlocking: Scalars['Boolean']['input'];
  userIds: Array<Scalars['ID']['input']>;
};


export type MutationChangeInquireStateForAdminArgs = {
  id: Scalars['ID']['input'];
  isPush?: Scalars['Boolean']['input'];
  state: InquireState;
};


export type MutationCreateAdminPostCategoryArgs = {
  data: AdminPostCategoryCreateInput;
};


export type MutationCreateBannerForAdminArgs = {
  data: BannerCreateInput;
};


export type MutationCreateCommunityPostArgs = {
  data: CommunityPostCreateInput;
};


export type MutationCreateCommunityPostReplyArgs = {
  data: CommunityPostReplyCreateInput;
};


export type MutationCreateCommunityReportArgs = {
  data: CommunityReportCreateInput;
};


export type MutationCreateEventForAdminArgs = {
  data: EventCreateInput;
};


export type MutationCreateFaqForAdminArgs = {
  data: FaqCreateInput;
};


export type MutationCreateGatheringArgs = {
  gatheringData: GatheringCreateInput;
  scheduleData: GatheringFirstScheduleCreateInput;
};


export type MutationCreateGatheringCategoryForAdminArgs = {
  data: GatheringCategoryCreateInputForAdmin;
};


export type MutationCreateGatheringTypeForAdminArgs = {
  data: GatheringTypeCreateInputForAdmin;
};


export type MutationCreateInquireArgs = {
  data: InquireCreateInput;
};


export type MutationCreateNoticeForAdminArgs = {
  data: NoticeCreateInput;
};


export type MutationCreateNotificationStoreForAdminArgs = {
  data: NotificationStorageCreateInput;
  isSend?: Scalars['Boolean']['input'];
  recipient_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationCreatePetArgs = {
  data: PetCreateInput;
};


export type MutationCreatePopupForAdminArgs = {
  data: PopupCreateInput;
};


export type MutationCreateReportArgs = {
  data: ReportCreateInput;
};


export type MutationCreateTermsOfServiceForAdminArgs = {
  data: TermsOfServiceCreateInputForAdmin;
};


export type MutationDeleteAdminPostCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBannerForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommunityPostArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommunityPostHideArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommunityPostLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommunityPostReplyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommunityPostsForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteCommunityReportArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEventForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFaqForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFaqsForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteGatheringArgs = {
  id: Scalars['ID']['input'];
  reason: Scalars['String']['input'];
};


export type MutationDeleteGatheringCategoryForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteGatheringTypeForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteInquireArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteManyCommunityPostRepliesForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteManyReportsForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationDeleteNoticeForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteNotificationStoreForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePetArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePopupForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteReportForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTermsOfServiceForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationGetKakaoAccessTokenArgs = {
  code: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
};


export type MutationLeaveUserArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  reason: LeaveReasonEnum;
};


export type MutationLeavingUserForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLinkAppleArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  identityToken: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationLinkGoogleArgs = {
  accessToken: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};


export type MutationLinkKakaoArgs = {
  accessToken: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationLinkNaverArgs = {
  accessToken: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};


export type MutationPinCommunityPostsForAdminArgs = {
  ids: Array<Scalars['ID']['input']>;
  isPinned: Scalars['Boolean']['input'];
};


export type MutationReadNotificationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRemoveFcmTokenArgs = {
  fcmRegistrationToken: Scalars['String']['input'];
};


export type MutationRequestAuthNumberArgs = {
  phoneNumber: Scalars['PhoneNumber']['input'];
};


export type MutationSendNotificationForAdminArgs = {
  data: NotificationCreateInput;
};


export type MutationSendNotificationStoreForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSetFcmTokenArgs = {
  data: UserFcmTokenAddInput;
};


export type MutationSignInArgs = {
  loginId: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSignInAppleArgs = {
  identityToken: Scalars['String']['input'];
};


export type MutationSignInGoogleArgs = {
  accessToken: Scalars['String']['input'];
};


export type MutationSignInKakaoArgs = {
  accessToken: Scalars['String']['input'];
};


export type MutationSignInNaverArgs = {
  accessToken: Scalars['String']['input'];
};


export type MutationSignUpArgs = {
  data: SignUpInput;
};


export type MutationSignUpAppleArgs = {
  data: SocialSignUpInput;
  identityToken: Scalars['String']['input'];
};


export type MutationSignUpGoogleArgs = {
  accessToken: Scalars['String']['input'];
  data: SocialSignUpInput;
};


export type MutationSignUpKakaoArgs = {
  accessToken: Scalars['String']['input'];
  data: SocialSignUpInput;
};


export type MutationSignUpNaverArgs = {
  accessToken: Scalars['String']['input'];
  data: SocialSignUpInput;
};


export type MutationSuspendUserArgs = {
  id: Scalars['ID']['input'];
  suspendedEndAt: Scalars['DateTime']['input'];
  suspendedReason?: InputMaybe<Scalars['String']['input']>;
};


export type MutationToggleGatheringLikeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateAdminPostCategoryArgs = {
  data: AdminPostCategoryUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBannerForAdminArgs = {
  data: BannerUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCommunityPostArgs = {
  data: CommunityPostUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCommunityPostFilesArgs = {
  fileIds: Array<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCommunityPostReplyArgs = {
  data: CommunityPostReplyUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCommunityReportArgs = {
  data: CommunityReportUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCommunityReportFilesArgs = {
  fileIds: Array<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCommunityReportForAdminArgs = {
  adminMemo?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  state?: InputMaybe<CommunityReportStateEnumType>;
};


export type MutationUpdateEventForAdminArgs = {
  data: EventUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFaqForAdminArgs = {
  data: FaqUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateGatheringArgs = {
  data: GatheringUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateGatheringCategoryForAdminArgs = {
  data: GatheringCategoryUpdateInputForAdmin;
  id: Scalars['ID']['input'];
};


export type MutationUpdateGatheringTypeForAdminArgs = {
  data: GatheringTypeUpdateInputForAdmin;
  id: Scalars['ID']['input'];
};


export type MutationUpdateInquireArgs = {
  data: InquireUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateInquireForAdminArgs = {
  data: InquireUpdateInputForAdmin;
  id: Scalars['ID']['input'];
};


export type MutationUpdateManyReportForAdminArgs = {
  data: ReportUpdateInput;
  ids: Array<Scalars['ID']['input']>;
};


export type MutationUpdateMyNotificationSettingArgs = {
  data: UserNotificationSettingUpdateInput;
};


export type MutationUpdateNoticeForAdminArgs = {
  data: NoticeUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateNotificationStoreForAdminArgs = {
  data: NotificationStorageUpdateInput;
  id: Scalars['ID']['input'];
  recipient_ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};


export type MutationUpdatePetArgs = {
  data: PetUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePopupForAdminArgs = {
  data: PopupUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateReportForAdminArgs = {
  data: ReportUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateServiceManageArgs = {
  data: ServiceManageUpdateInput;
};


export type MutationUpdateTermsOfServiceForAdminArgs = {
  data: TermsOfServiceUpdateInputForAdmin;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUserAdminMemoArgs = {
  id: Scalars['ID']['input'];
  memo: Scalars['String']['input'];
};


export type MutationUpdateUserForAdminArgs = {
  data: UserUpdateInput;
  id: Scalars['ID']['input'];
};


export type MutationValidateAuthNumberArgs = {
  authNumber: Scalars['String']['input'];
  phoneNumber: Scalars['PhoneNumber']['input'];
};

/** 공지사항 */
export type Notice = AdminPost & {
  __typename?: 'Notice';
  /** 내용 */
  content: Scalars['String']['output'];
  /** 상태 */
  state: AdminPostState;
  /** 제목 */
  title: Scalars['String']['output'];
  /** 타입 */
  type: AdminPostType;
};

/** 공지사항 생성 데이터 */
export type NoticeCreateInput = {
  /** 카테고리 ID */
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content: Scalars['String']['input'];
  /** 상태 */
  state?: InputMaybe<AdminPostState>;
  /** 제목 */
  title: Scalars['String']['input'];
};

/** 공지사항 수정 데이터 */
export type NoticeUpdateInput = {
  /** 카테고리 ID */
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 상태 */
  state?: InputMaybe<AdminPostState>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

/** 알림 */
export type Notification = {
  __typename?: 'Notification';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 이미지 URL 주소 */
  imageURL?: Maybe<Scalars['String']['output']>;
  /** 관리자 임의 전송 여부 */
  isCreatedForAdmin: Scalars['Boolean']['output'];
  /** 해당 알림 읽음 여부 */
  isRead: Scalars['Boolean']['output'];
  /** 메시지 */
  message: Scalars['String']['output'];
  /** 연관 데이터의 ID (타입을 참고하여 사용) */
  relationId?: Maybe<Scalars['ID']['output']>;
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
  /** 타입 */
  type: NotificationType;
  /** 링크 URL 주소 (타입을 참고하여 사용) */
  url?: Maybe<Scalars['String']['output']>;
};

/** 알림 생성 데이터 */
export type NotificationCreateInput = {
  /** 이미지 URL 주소 */
  imageURL?: InputMaybe<Scalars['String']['input']>;
  /** 메시지 */
  message: Scalars['String']['input'];
  /** 수신자 ID 목록 (없으면 해당 알림 타입 허용자에게 전부 발송) */
  recipientIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** 연관 데이터의 ID (타입을 참고하여 사용) */
  relationId?: InputMaybe<Scalars['ID']['input']>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
  /** 타입 */
  type: NotificationType;
  /** 링크 URL 주소 (타입을 참고하여 사용) */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: Notification;
};

/** 알림 필터 */
export type NotificationFilterInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 이미지 URL 주소 */
  imageURL?: InputMaybe<Array<StringFilterInput>>;
  /** 관리자 임의 전송 여부 */
  isCreatedForAdmin?: InputMaybe<Array<BooleanFilterInput>>;
  /** 메시지 */
  message?: InputMaybe<Array<StringFilterInput>>;
  /** 수신자 ID */
  recipients__id?: InputMaybe<Array<IdFilterInput>>;
  /** 연관 데이터의 ID */
  relationId?: InputMaybe<Array<IdFilterInput>>;
  /** 제목 */
  title?: InputMaybe<Array<StringFilterInput>>;
  /** 타입 */
  type?: InputMaybe<Array<NotificationTypeFilterInput>>;
  /** 링크 URL 주소 */
  url?: InputMaybe<Array<StringFilterInput>>;
};

/** 알림 목록 */
export type NotificationList = {
  __typename?: 'NotificationList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<NotificationEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 알림 정렬 */
export type NotificationSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 이미지 URL 주소 */
  imageURL?: InputMaybe<StringSortInput>;
  /** 관리자 임의 전송 여부 */
  isCreatedForAdmin?: InputMaybe<SortInput>;
  /** 메시지 */
  message?: InputMaybe<StringSortInput>;
  /** 수신자 ID */
  recipients__id?: InputMaybe<SortInput>;
  /** 연관 데이터의 ID */
  relationId?: InputMaybe<SortInput>;
  /** 제목 */
  title?: InputMaybe<StringSortInput>;
  /** 타입 */
  type?: InputMaybe<NotificationTypeSortInput>;
  /** 링크 URL 주소 */
  url?: InputMaybe<StringSortInput>;
};

/** 알림 저장소 생성 데이터 */
export type NotificationStorageCreateInput = {
  /** 이미지  URL주소 */
  imageURL?: InputMaybe<Scalars['String']['input']>;
  /** 내용 */
  message?: InputMaybe<Scalars['String']['input']>;
  /** 연관 데이터의 ID */
  relationId?: InputMaybe<Scalars['ID']['input']>;
  /** 예약 발송 시간, null이면 즉시 */
  scheduledAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** 수신 타겟 */
  target: NotificationStorageTargetType;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
  /** 알림 타입 */
  type?: InputMaybe<NotificationType>;
  /** 링크  URL주소 */
  url?: InputMaybe<Scalars['String']['input']>;
};

/** 알림 필터 */
export type NotificationStorageFilterInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 이미지 URL 주소 */
  imageURL?: InputMaybe<Array<StringFilterInput>>;
  /** 전송 여부 */
  isSend?: InputMaybe<Array<BooleanFilterInput>>;
  /** 메시지 */
  message?: InputMaybe<Array<StringFilterInput>>;
  /** 수신자 ID */
  recipients__id?: InputMaybe<Array<IdFilterInput>>;
  /** 연관 데이터의 ID */
  relationId?: InputMaybe<Array<IdFilterInput>>;
  /** 예약 발송 시간 */
  scheduledAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 수신 타겟 */
  target?: InputMaybe<Array<NotificationStorageTargetType>>;
  /** 제목 */
  title?: InputMaybe<Array<StringFilterInput>>;
  /** 타입 */
  type?: InputMaybe<Array<NotificationTypeFilterInput>>;
  /** 링크 URL 주소 */
  url?: InputMaybe<Array<StringFilterInput>>;
};

/** 알림 저장소 목록 */
export type NotificationStorageList = {
  __typename?: 'NotificationStorageList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<NotificationStorageModelEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 알림 저장소 */
export type NotificationStorageModel = {
  __typename?: 'NotificationStorageModel';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 이미지  URL주소 */
  imageURL?: Maybe<Scalars['String']['output']>;
  /** 전송 여부 */
  isSend: Scalars['Boolean']['output'];
  /** 내용 */
  message?: Maybe<Scalars['String']['output']>;
  /** 연관 데이터의 ID */
  relationId?: Maybe<Scalars['ID']['output']>;
  /** 예약 발송 시간, null이면 즉시 */
  scheduledAt?: Maybe<Scalars['DateTime']['output']>;
  /** 수신 타겟 */
  target?: Maybe<NotificationStorageTargetType>;
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
  /** 알림 타입 */
  type?: Maybe<NotificationType>;
  /** 링크  URL주소 */
  url?: Maybe<Scalars['String']['output']>;
};

export type NotificationStorageModelEdge = {
  __typename?: 'NotificationStorageModelEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: NotificationStorageModel;
};

/** 알림 저장소 정렬 */
export type NotificationStorageSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 이미지 URL 주소 */
  imageURL?: InputMaybe<StringSortInput>;
  /** 메시지 */
  message?: InputMaybe<StringSortInput>;
  /** 수신자 ID */
  recipients__id?: InputMaybe<SortInput>;
  /** 연관 데이터의 ID */
  relationId?: InputMaybe<SortInput>;
  /** 예약 발송 시간 */
  scheduledAt?: InputMaybe<Array<SortInput>>;
  /** 제목 */
  title?: InputMaybe<StringSortInput>;
  /** 타입 */
  type?: InputMaybe<NotificationTypeSortInput>;
  /** 링크 URL 주소 */
  url?: InputMaybe<StringSortInput>;
};

/** 알림 타겟 */
export enum NotificationStorageTargetType {
  /** 전체 */
  All = 'ALL',
  /** 안드 유저만 */
  Android = 'ANDROID',
  /** 특정인원 */
  Specific = 'SPECIFIC',
  /** iOS유저만 */
  IOs = 'iOS'
}

/** 알림 저장소 수정 데이터 */
export type NotificationStorageUpdateInput = {
  /** 이미지  URL주소 */
  imageURL?: InputMaybe<Scalars['String']['input']>;
  /** 내용 */
  message?: InputMaybe<Scalars['String']['input']>;
  /** 연관 데이터의 ID */
  relationId?: InputMaybe<Scalars['ID']['input']>;
  /** 예약 발송 시간, null이면 즉시 */
  scheduledAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** 수신 타겟 */
  target?: InputMaybe<NotificationStorageTargetType>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
  /** 알림 타입 */
  type?: InputMaybe<NotificationType>;
  /** 링크  URL주소 */
  url?: InputMaybe<Scalars['String']['input']>;
};

export enum NotificationType {
  /** 채팅 알림 */
  Chat = 'CHAT',
  /** 댓글 알림 */
  Comment = 'COMMENT',
  /** 모임 알림 */
  Gathering = 'GATHERING',
  /** 일정 알림 */
  Schedule = 'SCHEDULE'
}

/** 알림 타입 필터 */
export type NotificationTypeFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<NotificationType>;
  values?: InputMaybe<Array<NotificationType>>;
};

/** 알림 타입 정렬 */
export type NotificationTypeSortInput = {
  case?: InputMaybe<Array<NotificationType>>;
  nulls?: InputMaybe<Nulls>;
  order: Order;
};

/** 정렬 시 null 순서 */
export enum Nulls {
  /** null 먼저 */
  First = 'FIRST',
  /** null 마지막에 */
  Last = 'LAST'
}

/** 숫자 필터 연산자 */
export enum NumberFilterOperators {
  Between = 'BETWEEN',
  Equal = 'EQUAL',
  GreaterThan = 'GREATER_THAN',
  GreaterThanEqual = 'GREATER_THAN_EQUAL',
  In = 'IN',
  IsNotNull = 'IS_NOT_NULL',
  IsNull = 'IS_NULL',
  LessThan = 'LESS_THAN',
  LessThanEqual = 'LESS_THAN_EQUAL',
  NotBetween = 'NOT_BETWEEN',
  NotEqual = 'NOT_EQUAL',
  NotIn = 'NOT_IN'
}

/** OpenSource모델 */
export type OpenSourceModel = {
  __typename?: 'OpenSourceModel';
  /** 이메일 */
  email?: Maybe<Scalars['String']['output']>;
  /** 라이센스 URL */
  licenseFileUrl?: Maybe<Scalars['String']['output']>;
  /** 라이센스 종류 */
  licenses?: Maybe<Scalars['String']['output']>;
  /** 소스명 */
  name?: Maybe<Scalars['String']['output']>;
  /** 게시자 */
  publisher?: Maybe<Scalars['String']['output']>;
  /** 저장소 */
  repository?: Maybe<Scalars['String']['output']>;
};

/** 정렬 순서 */
export enum Order {
  /** 오름차순 */
  Ascending = 'ASCENDING',
  /** 내림차순 */
  Descending = 'DESCENDING'
}

/** 페이지 정보 */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** 현재 페이지의 마지막 데이터 커서 */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** 다음 페이지 존재 여부 */
  hasNextPage: Scalars['Boolean']['output'];
  /** 이전 페이지 존재 여부 */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** 현재 페이지의 처음 데이터 커서 */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Pet = {
  __typename?: 'Pet';
  /** 생년월일 */
  birthDate?: Maybe<Scalars['String']['output']>;
  /** 품종 */
  breed?: Maybe<Scalars['String']['output']>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 성별 */
  gender?: Maybe<PetGenderType>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** 성향 */
  personality?: Maybe<Scalars['String']['output']>;
  /** 크기 */
  size?: Maybe<PetSizeEnum>;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

export type PetCreateInput = {
  /** 생년월일 */
  birthDate?: InputMaybe<Scalars['String']['input']>;
  /** 품종 */
  breed?: InputMaybe<Scalars['String']['input']>;
  /** 성별 */
  gender?: InputMaybe<PetGenderType>;
  name: Scalars['String']['input'];
  /** 성향 */
  personality?: InputMaybe<Scalars['String']['input']>;
  profile__id: Scalars['ID']['input'];
  /** 크기 */
  size?: InputMaybe<PetSizeEnum>;
};

export type PetEdge = {
  __typename?: 'PetEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: Pet;
};

export type PetFilterInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 동물 이름 */
  name?: InputMaybe<Array<StringFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 주인 id */
  user__id?: InputMaybe<Array<IdFilterInput>>;
};

export enum PetGenderType {
  /** 암컷 */
  Female = 'FEMALE',
  /** 수컷 */
  Male = 'MALE'
}

export type PetList = {
  __typename?: 'PetList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<PetEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

export enum PetSizeEnum {
  /** 대형 */
  Large = 'LARGE',
  /** 중형 */
  Medium = 'MEDIUM',
  /** 소형 */
  Small = 'SMALL'
}

export type PetSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

export type PetUpdateInput = {
  /** 생년월일 */
  birthDate?: InputMaybe<Scalars['String']['input']>;
  /** 품종 */
  breed?: InputMaybe<Scalars['String']['input']>;
  /** 성별 */
  gender?: InputMaybe<PetGenderType>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** 성향 */
  personality?: InputMaybe<Scalars['String']['input']>;
  profile__id?: InputMaybe<Scalars['ID']['input']>;
  /** 크기 */
  size?: InputMaybe<PetSizeEnum>;
};

/** 팝업 */
export type Popup = AdminPost & {
  __typename?: 'Popup';
  /** 클릭 액션 */
  action: AdminPostAction;
  /** 내용 */
  content: Scalars['String']['output'];
  /** 커버 이미지 */
  coverUrl: Scalars['String']['output'];
  /** 링크 URL */
  linkUrl?: Maybe<Scalars['String']['output']>;
  /** 우선순위 */
  priority?: Maybe<Scalars['Int']['output']>;
  /**
   * 게시 종료일
   * 없을시 2999-12-31 23:59:59.000 +0900 으로 생성
   */
  publishingPeriodEndAt: Scalars['DateTime']['output'];
  /**
   * 게시 시작일
   * 없을시 1990-01-01 00:00:00.000 +0900 으로 생성
   */
  publishingPeriodStartAt: Scalars['DateTime']['output'];
  /** 상태 */
  state: AdminPostState;
  /** 제목 */
  title: Scalars['String']['output'];
  /** 타입 */
  type: AdminPostType;
};

/** 팝업 생성 데이터 */
export type PopupCreateInput = {
  /** 클릭 액션 */
  action: AdminPostAction;
  /** 카테고리 ID */
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content: Scalars['String']['input'];
  /** 커버 이미지 */
  coverUrl: Scalars['String']['input'];
  /** 이동 URL */
  linkUrl?: InputMaybe<Scalars['String']['input']>;
  /** 우선순위 */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /**
   * 게시 종료일
   * 없을시 2999-12-31 23:59:59.000 +0900 으로 생성
   */
  publishingPeriodEndAt: Scalars['DateTime']['input'];
  /**
   * 게시 시작일
   * 없을시 1990-01-01 00:00:00.000 +0900 으로 생성
   */
  publishingPeriodStartAt: Scalars['DateTime']['input'];
  /** 상태 */
  state?: InputMaybe<AdminPostState>;
  /** 제목 */
  title: Scalars['String']['input'];
};

/** 팝업 수정 데이터 */
export type PopupUpdateInput = {
  /** 클릭 액션 */
  action?: InputMaybe<AdminPostAction>;
  /** 카테고리 ID */
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  /** 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 커버 이미지 */
  coverUrl?: InputMaybe<Scalars['String']['input']>;
  /** 이동 URL */
  linkUrl?: InputMaybe<Scalars['String']['input']>;
  /** 우선순위 */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /**
   * 게시 종료일
   * 없을시 2999-12-31 23:59:59.000 +0900 으로 생성
   */
  publishingPeriodEndAt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * 게시 시작일
   * 없을시 1990-01-01 00:00:00.000 +0900 으로 생성
   */
  publishingPeriodStartAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** 상태 */
  state?: InputMaybe<AdminPostState>;
  /** 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  /**
   * 관리자가 작성한 게시물을 조회합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 게시물을 찾을 수 없습니다.
   */
  adminPost: AdminPost;
  adminPostCategories: Array<AdminPostCategory>;
  /**
   * 관리자가 작성한 게시물 목록을 가져옵니다.
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   */
  adminPosts: AdminPostList;
  /** 커뮤니티 게시물 단일 조회 */
  communityPost: CommunityPost;
  /** 커뮤니티 게시물 댓글 목록 조회 */
  communityPostReplies: CommunityPostReplyList;
  /** 커뮤니티 게시물 댓글 단일 조회 */
  communityPostReply: CommunityPostReply;
  /** 커뮤니티 게시물 목록 조회 */
  communityPosts: CommunityPostList;
  /** 커뮤니티 신고 단일 조회 */
  communityReport: CommunityReport;
  /** 커뮤니티 신고 단일 조회 - 관리자용 */
  communityReportForAdmin: CommunityReport;
  /** 커뮤니티 신고 목록 조회 - 관리자용 */
  communityReportsForAdmin: CommunityReportList;
  /**
   * 파일의 정보를 조회합니다.
   *
   * **에러 코드**
   * - `NOT_FOUND`: 파일이 존재하지 않습니다.
   */
  file: File;
  gathering: Gathering;
  gatheringCategories: GatheringCategoryList;
  gatheringCategory: GatheringCategory;
  gatheringType: GatheringType;
  gatheringTypes: GatheringTypeList;
  /** 사용자용 모임 조회 */
  gatherings: GatheringList;
  /**
   * 문의 내용을 가져옵니다.
   *
   * **에러 코드**
   *   - `NOT_FOUND`: 해당 문의를 찾을 수 없습니다.
   */
  inquire: Inquire;
  /**
   * 문의 내용을 가져옵니다. - 관리자용
   *
   * **에러 코드**
   *   - `NOT_FOUND`: 해당 문의를 찾을 수 없습니다.
   */
  inquireForAdmin: Inquire;
  /**
   * 문의 리스트를 가져옵니다. - 관리자용
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   */
  inquiresForAdmin: InquireList;
  /**
   * 나 자신의 사용자를 조회합니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   * - `NOT_FOUND`: 해당 사용자를 찾을 수 없습니다.
   */
  me: Member;
  /**
   * 내가 차단한 사용자 목록을 조회합니다.
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  myBlockUsers: UserBlockList;
  /** 내 커뮤니티 신고 목록 조회 */
  myCommunityReports: CommunityReportList;
  /**
   * 내 문의 리스트를 가져옵니다.
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   */
  myInquires: InquireList;
  /**
   * 내 알림 목록을 가져옵니다.
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   */
  myNotifications: NotificationList;
  /**
   * 나의 전체 신고 내역을 가져옵니다.
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   */
  myReports: ReportList;
  /**
   * 알림을 조회합니다. 관리자가 아닌 사용자는 자신의 알림만 조회할 수 있습니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   * - `NOT_FOUND`: 해당 사용자를 찾을 수 없습니다.
   */
  notification: Notification;
  /**
   * 알림 저장소를 조회합니다. - 관리자 권한
   *
   * **에러 코드**
   * - `NOT_FOUND`: 해당 사용자를 찾을 수 없습니다.
   */
  notificationStorage: NotificationStorageModel;
  /**
   * 알림 저장소 목록를 조회합니다. - 관리자 권한
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   */
  notificationStorages: NotificationStorageList;
  /**
   * 전체 알림 목록을 가져옵니다. 관리자만 허용됩니다.
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   */
  notificationsForAdmin: NotificationList;
  pet: Pet;
  pets: PetList;
  /**
   * 특정 신고를 조회합니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   * - `NOT_FOUND`: 해당 신고 내역을 찾을 수 없습니다.
   */
  reportForAdmin: Report;
  /**
   * 전체 신고 내역을 가져옵니다.
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   */
  reportsForAdmin: ReportList;
  /** 서비스 운영 정보 */
  serviceManage: ServiceManage;
  surroundingAddresses: Array<Address>;
  termsOfService: TermsOfService;
  termsOfServices: TermsOfServiceList;
  /** 본인이 읽지않은 알림 수 */
  unReadNotificationCnt: Scalars['Float']['output'];
  /**
   * 특정 사용자를 조회합니다.
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   * - `NOT_FOUND`: 해당 사용자를 찾을 수 없습니다.
   */
  user: Member;
  /**
   * 사용자 목록을 가져옵니다.
   *
   * [GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm)
   *
   * **에러 코드**
   * - `FORBIDDEN`: 권한이 없습니다.
   */
  users: UserList;
};


export type QueryAdminPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAdminPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<AdminPostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<AdminPostSortInput>>;
};


export type QueryCommunityPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCommunityPostRepliesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<CommunityPostReplyFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CommunityPostReplyOrderByInput>>;
};


export type QueryCommunityPostReplyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCommunityPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<CommunityPostFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CommunityPostOrderByInput>>;
};


export type QueryCommunityReportArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCommunityReportForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCommunityReportsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<CommunityReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CommunityReportOrderByInput>>;
};


export type QueryFileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGatheringArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGatheringCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<GatheringCategoryFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GatheringCategorySortInput>>;
};


export type QueryGatheringCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGatheringTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGatheringTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<GatheringTypeFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GatheringTypeSortInput>>;
};


export type QueryGatheringsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<GatheringFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<GatheringSortInput>>;
};


export type QueryInquireArgs = {
  id: Scalars['ID']['input'];
};


export type QueryInquireForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryInquiresForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InquireFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InquireSortInput>>;
};


export type QueryMyBlockUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMyCommunityReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<CommunityReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CommunityReportOrderByInput>>;
};


export type QueryMyInquiresArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<InquireFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InquireSortInput>>;
};


export type QueryMyNotificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  unreadOnly: Scalars['Boolean']['input'];
};


export type QueryMyReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<ReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ReportSortInput>>;
};


export type QueryNotificationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNotificationStorageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNotificationStoragesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<NotificationStorageFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NotificationStorageSortInput>>;
};


export type QueryNotificationsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<NotificationFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NotificationSortInput>>;
};


export type QueryPetArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<PetFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PetSortInput>>;
};


export type QueryReportForAdminArgs = {
  id: Scalars['ID']['input'];
};


export type QueryReportsForAdminArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<ReportFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ReportSortInput>>;
};


export type QuerySurroundingAddressesArgs = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};


export type QueryTermsOfServiceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTermsOfServicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<TermsOfServiceFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<TermsOfServiceSortInput>>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Array<UserFilterInput>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<UserOrderInput>>;
};

/** 신고 내역 */
export type Report = {
  __typename?: 'Report';
  /** 관리자용 유저 메모 */
  adminMemo?: Maybe<Scalars['String']['output']>;
  /** 신고 작성자 */
  author: Member;
  /** 신고 대상의 유형 */
  category: ReportCategoryEnumType;
  /** 신고 내용 (500자 이하) */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 비고 */
  etc?: Maybe<Scalars['String']['output']>;
  /** 신고 파일 */
  files?: Maybe<Array<File>>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 신고 처리 상태 */
  state: ReportStateEnumType;
  /** 신고 당한 사용자 */
  targetUser: Member;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

export enum ReportCategoryEnumType {
  /** 사용자 신고 */
  User = 'USER'
}

/** 신고 생성 */
export type ReportCreateInput = {
  /** 신고 대상의 유형 */
  category: ReportCategoryEnumType;
  /** 신고 내용 (500자 이하) */
  content: Scalars['String']['input'];
  /** 비고 */
  etc?: InputMaybe<Scalars['String']['input']>;
  fileIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** 신고 당하는 사용자 ID */
  targetUserId: Scalars['ID']['input'];
};

export type ReportEdge = {
  __typename?: 'ReportEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: Report;
};

/** 신고 필터 */
export type ReportFilterInput = {
  /** 작성자 uuid */
  author__id?: InputMaybe<Array<IdFilterInput>>;
  /** 신고 대상의 유형 */
  category?: InputMaybe<Array<CategoryFilterInput>>;
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 신고 당한 사용자 uuid */
  reportedUser__id?: InputMaybe<Array<IdFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

/** 신고 목록 */
export type ReportList = {
  __typename?: 'ReportList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<ReportEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 신고 정렬 */
export type ReportSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

export enum ReportStateEnumType {
  /** 완료 */
  Complete = 'COMPLETE',
  /** 대기중 */
  Pending = 'PENDING',
  /** 처리중 */
  Processing = 'PROCESSING'
}

/** 신고 수정 */
export type ReportUpdateInput = {
  /** 관리자 메모 */
  adminMemo?: InputMaybe<Scalars['String']['input']>;
  /** 신고 처리 상태 */
  state?: InputMaybe<ReportStateEnumType>;
};

/** 서비스 운영 정보 */
export type ServiceManage = {
  __typename?: 'ServiceManage';
  /** 사업자등록번호 */
  businessLicense?: Maybe<Scalars['String']['output']>;
  /** 사업지 주소 */
  companyAddress?: Maybe<Scalars['String']['output']>;
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 마켓팅규정 */
  marketingTerms?: Maybe<Scalars['String']['output']>;
  /** 오픈소스 리스트 */
  openSource?: Maybe<Array<OpenSourceModel>>;
  /** 개인정보처리방침 */
  personalProcessingPolicy?: Maybe<Scalars['String']['output']>;
  /** 환불규정 */
  refundTerms?: Maybe<Scalars['String']['output']>;
  /** 대표자명 */
  representativeName?: Maybe<Scalars['String']['output']>;
  /** 서비스이용약관 */
  serviceTerms?: Maybe<Scalars['String']['output']>;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
  /** 탈퇴약관 */
  withdrawalTerms?: Maybe<Scalars['String']['output']>;
};

/** 서비스 운영정보 Update Input */
export type ServiceManageUpdateInput = {
  /** 사업자등록번호 */
  businessLicense?: InputMaybe<Scalars['String']['input']>;
  /** 사업지 주소 */
  companyAddress?: InputMaybe<Scalars['String']['input']>;
  /** 마켓팅규정 */
  marketingTerms?: InputMaybe<Scalars['String']['input']>;
  /** 개인정보처리방침 */
  personalProcessingPolicy?: InputMaybe<Scalars['String']['input']>;
  /** 환불규정 */
  refundTerms?: InputMaybe<Scalars['String']['input']>;
  /** 대표자명 */
  representativeName?: InputMaybe<Scalars['String']['input']>;
  /** 서비스이용약관 */
  serviceTerms?: InputMaybe<Scalars['String']['input']>;
  /** 탈퇴약관 */
  withdrawalTerms?: InputMaybe<Scalars['String']['input']>;
};

/** 회원가입 데이터 */
export type SignUpInput = {
  /** 이메일 */
  email?: InputMaybe<Scalars['String']['input']>;
  /** 닉네임 */
  nickname: Scalars['String']['input'];
  /** 비밀번호 */
  password: Scalars['String']['input'];
  /** 전화번호 */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

/** 회원가입 결과 */
export type SignUpResult = {
  __typename?: 'SignUpResult';
  /** 토큰 정보 */
  token: AuthTokenResponse;
  /** 사용자 정보 */
  user: Member;
};

/** 회원가입 데이터 */
export type SocialSignUpInput = {
  address: Scalars['String']['input'];
  nickname: Scalars['String']['input'];
  /** 반려동물 이름 */
  petName: Scalars['String']['input'];
  /** 반려동물 프로필 파일 id */
  petProfileId: Scalars['ID']['input'];
  phoneNumber: Scalars['String']['input'];
  /** 휴대폰 인증 후 발급받은 고유 코드 */
  requestId: Scalars['ID']['input'];
  /** 동의하는 약관 id */
  termsOfService__ids: Array<Scalars['ID']['input']>;
};

/** 정렬 */
export type SortInput = {
  nulls?: InputMaybe<Nulls>;
  order: Order;
};

/** 문자열(String) 필터 */
export type StringFilterInput = {
  operator: StringFilterOperators;
  value?: InputMaybe<Scalars['String']['input']>;
  values?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** 문자열 필터 연산자 */
export enum StringFilterOperators {
  Equal = 'EQUAL',
  Ilike = 'ILIKE',
  In = 'IN',
  IsNotNull = 'IS_NOT_NULL',
  IsNull = 'IS_NULL',
  Like = 'LIKE',
  NotEqual = 'NOT_EQUAL',
  NotIlike = 'NOT_ILIKE',
  NotIn = 'NOT_IN',
  NotLike = 'NOT_LIKE'
}

/** 문자열 정렬 */
export type StringSortInput = {
  case?: InputMaybe<Array<Scalars['String']['input']>>;
  nulls?: InputMaybe<Nulls>;
  order: Order;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** 커뮤니티 게시물 댓글 수신 */
  receiveCommunityPostReply: CommunityPostReply;
};


export type SubscriptionReceiveCommunityPostReplyArgs = {
  rootId: Scalars['ID']['input'];
};

export type TermsOfService = {
  __typename?: 'TermsOfService';
  /** 약관 내용 */
  content: Scalars['String']['output'];
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 동의 필수 여부 */
  isRequired: Scalars['Boolean']['output'];
  /** 약관명 */
  name: Scalars['String']['output'];
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
};

export type TermsOfServiceCreateInputForAdmin = {
  /** 약관 내용 */
  content: Scalars['String']['input'];
  /** 동의 필수 여부 */
  isRequired: Scalars['Boolean']['input'];
  /** 약관명 */
  name: Scalars['String']['input'];
};

export type TermsOfServiceEdge = {
  __typename?: 'TermsOfServiceEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: TermsOfService;
};

export type TermsOfServiceFilterInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<Array<DateTimeFilterInput>>;
};

export type TermsOfServiceList = {
  __typename?: 'TermsOfServiceList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<TermsOfServiceEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

export type TermsOfServiceSortInput = {
  /** 생성 날짜/시간 */
  createdAt?: InputMaybe<SortInput>;
  /** 삭제 날짜/시간 */
  deletedAt?: InputMaybe<SortInput>;
  /** UUID */
  id?: InputMaybe<SortInput>;
  /** 수정 날짜/시간 */
  updatedAt?: InputMaybe<SortInput>;
};

export type TermsOfServiceUpdateInputForAdmin = {
  /** 약관 내용 */
  content: Scalars['String']['input'];
  /** 동의 필수 여부 */
  isRequired: Scalars['Boolean']['input'];
  /** 약관명 */
  name: Scalars['String']['input'];
};

/** 사용자 */
export type User = {
  /** 관리자용 유저 메모 */
  adminMemo?: Maybe<Scalars['String']['output']>;
  communityPostCount: Scalars['Int']['output'];
  communityPostHideCount: Scalars['Int']['output'];
  communityPostLikeCount: Scalars['Int']['output'];
  /** 이메일 */
  email?: Maybe<Scalars['String']['output']>;
  /** UUID */
  id: Scalars['ID']['output'];
  /** 고유번호 */
  idx: Scalars['Int']['output'];
  /** 가입 날짜/시간 */
  joinedAt: Scalars['DateTime']['output'];
  /** 탈퇴 날짜/시간 */
  leavedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 닉네임 */
  nickname?: Maybe<Scalars['String']['output']>;
  /** 전화번호 */
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** 권한 타입 */
  role: UserRole;
  /** 소셜 서비스 연결 리스트 */
  socials: Array<Maybe<UserSocialLink>>;
  /** 상태 */
  state: UserState;
  /** 정지 처리된 시간 */
  suspendedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** 차단 기록 */
export type UserBlock = {
  __typename?: 'UserBlock';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  user: User;
};

export type UserBlockEdge = {
  __typename?: 'UserBlockEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: UserBlock;
};

/** 차단 기록 목록 */
export type UserBlockList = {
  __typename?: 'UserBlockList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<UserBlockEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: User;
};

/** 사용자 FCM 토큰 */
export type UserFcmToken = {
  __typename?: 'UserFCMToken';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** FCM 등록 토큰 */
  fcmRegistrationToken: Scalars['String']['output'];
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** OS */
  os: FcmTokenOsEnum;
  /** 수정 날짜/시간 */
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

/** 사용자 FCM 토큰 추가 */
export type UserFcmTokenAddInput = {
  /** FCM 등록 토큰 */
  fcmRegistrationToken: Scalars['String']['input'];
  /** OS */
  os: FcmTokenOsEnum;
};

export type UserFcmTokenEdge = {
  __typename?: 'UserFCMTokenEdge';
  /** 커서 */
  cursor: Scalars['String']['output'];
  /** 노드 */
  node: UserFcmToken;
};

/** 사용자 필터 */
export type UserFilterInput = {
  avatar__id?: InputMaybe<Array<IdFilterInput>>;
  /** 이메일 */
  email?: InputMaybe<Array<StringFilterInput>>;
  /** UUID */
  id?: InputMaybe<Array<IdFilterInput>>;
  /** 고유번호 */
  idx?: InputMaybe<Array<IntFilterInput>>;
  /** 가입 날짜/시간 */
  joinedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 탈퇴 날짜/시간 */
  leavedAt?: InputMaybe<Array<DateTimeFilterInput>>;
  /** 고유 이름(아이디) */
  name?: InputMaybe<Array<StringFilterInput>>;
  /** 전화번호 */
  phoneNumber?: InputMaybe<Array<StringFilterInput>>;
  /** 권한 타입 */
  role?: InputMaybe<Array<UserTypeFilterInput>>;
};

/** 사용자 목록 */
export type UserList = {
  __typename?: 'UserList';
  /** 페이지네이션된 데이터 목록 */
  edges: Array<Maybe<UserEdge>>;
  /** 페이지네이션된 페이지 정보 */
  pageInfo: PageInfo;
  /** 전체 데이터 개 수 */
  totalCount: Scalars['Int']['output'];
};

/** 사용자 알림 설정 */
export type UserNotificationSetting = {
  __typename?: 'UserNotificationSetting';
  /** 채팅 */
  chat?: Maybe<Scalars['Boolean']['output']>;
  /** 댓글 */
  comment?: Maybe<Scalars['Boolean']['output']>;
  /** 모임 */
  gathering?: Maybe<Scalars['Boolean']['output']>;
  /** 일정 */
  schedule?: Maybe<Scalars['Boolean']['output']>;
};

/** 사용자 알림 설정 수정 */
export type UserNotificationSettingUpdateInput = {
  /** 채팅 */
  chat?: InputMaybe<Scalars['Boolean']['input']>;
  /** 댓글 */
  comment?: InputMaybe<Scalars['Boolean']['input']>;
  /** 모임 */
  gathering?: InputMaybe<Scalars['Boolean']['input']>;
  /** 일정 */
  schedule?: InputMaybe<Scalars['Boolean']['input']>;
};

/** 사용자 정렬 */
export type UserOrderInput = {
  /** 이메일 */
  email?: InputMaybe<StringSortInput>;
  /** UUID */
  id?: InputMaybe<StringSortInput>;
  /** 고유번호 */
  idx?: InputMaybe<IntSortInput>;
  /** 가입 날짜/시간 */
  joinedAt?: InputMaybe<SortInput>;
  /** 탈퇴 날짜/시간 */
  leavedAt?: InputMaybe<SortInput>;
  /** 고유 이름(아이디) */
  name?: InputMaybe<StringSortInput>;
  /** 전화번호 */
  phoneNumber?: InputMaybe<StringSortInput>;
  /** 권한 타입 */
  role?: InputMaybe<UserTypeSortInput>;
};

/** 프로필 수정 */
export type UserProfileUpdateInput = {
  /** 프로필 설명 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 홈페이지 등 링크 */
  url?: InputMaybe<Scalars['String']['input']>;
};

/** 사용자 권한 */
export enum UserRole {
  /** 관리자 */
  Admin = 'ADMIN',
  /** 일반 사용자 */
  Member = 'MEMBER'
}

/** 사용자 소셜 서비스 연결 */
export type UserSocialLink = {
  __typename?: 'UserSocialLink';
  /** 생성 날짜/시간 */
  createdAt: Scalars['DateTime']['output'];
  /** 삭제 날짜/시간 */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 이메일 */
  email?: Maybe<Scalars['String']['output']>;
  /** 기본 키(UUID) */
  id: Scalars['ID']['output'];
  /** 소셜 서비스 종류 */
  socialType: UserSocialType;
};

/** 사용자 소셜 종류 */
export enum UserSocialType {
  /** 애플 */
  Apple = 'APPLE',
  /** 구글 */
  Google = 'GOOGLE',
  /** 카카오 */
  Kakao = 'KAKAO',
  /** 네이버 */
  Naver = 'NAVER'
}

/** 사용자 상태 */
export enum UserState {
  /** 활성화 상태 */
  Active = 'ACTIVE',
  /** 비활성화 상태 - 휴면계정 */
  Inactive = 'INACTIVE',
  /** 탈퇴상태 */
  Leaved = 'LEAVED',
  /** 가입 대기중 */
  Pending = 'PENDING',
  /** 정지 */
  Suspended = 'SUSPENDED'
}

/** 사용자 타입 필터 */
export type UserTypeFilterInput = {
  operator: EnumFilterOperators;
  value?: InputMaybe<UserRole>;
  values?: InputMaybe<Array<UserRole>>;
};

/** 사용자 타입 정렬 */
export type UserTypeSortInput = {
  case?: InputMaybe<Array<UserRole>>;
  nulls?: InputMaybe<Nulls>;
  order: Order;
};

/** 사용자 수정 데이터 */
export type UserUpdateInput = {
  /** 이메일 */
  email?: InputMaybe<Scalars['String']['input']>;
  /** 닉네임 */
  nickname?: InputMaybe<Scalars['String']['input']>;
  notificationSetting?: InputMaybe<UserNotificationSettingUpdateInput>;
  /** 전화번호 */
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<UserProfileUpdateInput>;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'Member' }
    & Pick<Member, 'id'>
  ) }
);

export type TermsOfServiceQueryVariables = Exact<{
  termsOfServiceId: Scalars['ID']['input'];
}>;


export type TermsOfServiceQuery = (
  { __typename?: 'Query' }
  & { termsOfService: (
    { __typename?: 'TermsOfService' }
    & Pick<TermsOfService, 'content' | 'id' | 'name'>
  ) }
);

export type TermsOfServicesQueryVariables = Exact<{
  sort?: InputMaybe<Array<TermsOfServiceSortInput> | TermsOfServiceSortInput>;
}>;


export type TermsOfServicesQuery = (
  { __typename?: 'Query' }
  & { termsOfServices: (
    { __typename?: 'TermsOfServiceList' }
    & Pick<TermsOfServiceList, 'totalCount'>
    & { edges: Array<Maybe<(
      { __typename?: 'TermsOfServiceEdge' }
      & { node: (
        { __typename?: 'TermsOfService' }
        & Pick<TermsOfService, 'id' | 'name' | 'updatedAt'>
      ) }
    )>> }
  ) }
);


export const MeDocument = gql`
    query Me {
  me {
    id
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const TermsOfServiceDocument = gql`
    query TermsOfService($termsOfServiceId: ID!) {
  termsOfService(id: $termsOfServiceId) {
    content
    id
    name
  }
}
    `;

/**
 * __useTermsOfServiceQuery__
 *
 * To run a query within a React component, call `useTermsOfServiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useTermsOfServiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTermsOfServiceQuery({
 *   variables: {
 *      termsOfServiceId: // value for 'termsOfServiceId'
 *   },
 * });
 */
export function useTermsOfServiceQuery(baseOptions: Apollo.QueryHookOptions<TermsOfServiceQuery, TermsOfServiceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TermsOfServiceQuery, TermsOfServiceQueryVariables>(TermsOfServiceDocument, options);
      }
export function useTermsOfServiceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TermsOfServiceQuery, TermsOfServiceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TermsOfServiceQuery, TermsOfServiceQueryVariables>(TermsOfServiceDocument, options);
        }
export type TermsOfServiceQueryHookResult = ReturnType<typeof useTermsOfServiceQuery>;
export type TermsOfServiceLazyQueryHookResult = ReturnType<typeof useTermsOfServiceLazyQuery>;
export type TermsOfServiceQueryResult = Apollo.QueryResult<TermsOfServiceQuery, TermsOfServiceQueryVariables>;
export const TermsOfServicesDocument = gql`
    query TermsOfServices($sort: [TermsOfServiceSortInput!]) {
  termsOfServices(sort: $sort) {
    totalCount
    edges {
      node {
        id
        name
        updatedAt
      }
    }
  }
}
    `;

/**
 * __useTermsOfServicesQuery__
 *
 * To run a query within a React component, call `useTermsOfServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTermsOfServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTermsOfServicesQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useTermsOfServicesQuery(baseOptions?: Apollo.QueryHookOptions<TermsOfServicesQuery, TermsOfServicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TermsOfServicesQuery, TermsOfServicesQueryVariables>(TermsOfServicesDocument, options);
      }
export function useTermsOfServicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TermsOfServicesQuery, TermsOfServicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TermsOfServicesQuery, TermsOfServicesQueryVariables>(TermsOfServicesDocument, options);
        }
export type TermsOfServicesQueryHookResult = ReturnType<typeof useTermsOfServicesQuery>;
export type TermsOfServicesLazyQueryHookResult = ReturnType<typeof useTermsOfServicesLazyQuery>;
export type TermsOfServicesQueryResult = Apollo.QueryResult<TermsOfServicesQuery, TermsOfServicesQueryVariables>;
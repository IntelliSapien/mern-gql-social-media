"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KubeHorizontalPodAutoscalerV2Beta2 = exports.KubeHorizontalPodAutoscalerListV2Beta1 = exports.KubeHorizontalPodAutoscalerV2Beta1 = exports.KubeScale = exports.KubeHorizontalPodAutoscalerList = exports.KubeHorizontalPodAutoscaler = exports.KubeSubjectAccessReviewV1Beta1 = exports.KubeSelfSubjectRulesReviewV1Beta1 = exports.KubeSelfSubjectAccessReviewV1Beta1 = exports.KubeLocalSubjectAccessReviewV1Beta1 = exports.KubeSubjectAccessReview = exports.KubeSelfSubjectRulesReview = exports.KubeSelfSubjectAccessReview = exports.KubeLocalSubjectAccessReview = exports.KubeTokenReviewV1Beta1 = exports.KubeTokenReview = exports.KubeAuditSinkListV1Alpha1 = exports.KubeAuditSinkV1Alpha1 = exports.KubeStatefulSetListV1Beta2 = exports.KubeStatefulSetV1Beta2 = exports.KubeScaleV1Beta2 = exports.KubeReplicaSetListV1Beta2 = exports.KubeReplicaSetV1Beta2 = exports.KubeDeploymentListV1Beta2 = exports.KubeDeploymentV1Beta2 = exports.KubeDaemonSetListV1Beta2 = exports.KubeDaemonSetV1Beta2 = exports.KubeControllerRevisionListV1Beta2 = exports.KubeControllerRevisionV1Beta2 = exports.KubeStatefulSetListV1Beta1 = exports.KubeStatefulSetV1Beta1 = exports.KubeScaleV1Beta1 = exports.KubeDeploymentListV1Beta1 = exports.KubeDeploymentV1Beta1 = exports.KubeControllerRevisionListV1Beta1 = exports.KubeControllerRevisionV1Beta1 = exports.KubeStatefulSetList = exports.KubeStatefulSet = exports.KubeReplicaSetList = exports.KubeReplicaSet = exports.KubeDeploymentList = exports.KubeDeployment = exports.KubeDaemonSetList = exports.KubeDaemonSet = exports.KubeControllerRevisionList = exports.KubeControllerRevision = exports.KubeValidatingWebhookConfigurationListV1Beta1 = exports.KubeValidatingWebhookConfigurationV1Beta1 = exports.KubeMutatingWebhookConfigurationListV1Beta1 = exports.KubeMutatingWebhookConfigurationV1Beta1 = void 0;
exports.KubeDaemonSetListV1Beta1 = exports.KubeDaemonSetV1Beta1 = exports.KubeEventListV1Beta1 = exports.KubeEventV1Beta1 = exports.KubeServiceList = exports.KubeServiceAccountList = exports.KubeServiceAccount = exports.KubeService = exports.KubeSecretList = exports.KubeSecret = exports.KubeResourceQuotaList = exports.KubeResourceQuota = exports.KubeReplicationControllerList = exports.KubeReplicationController = exports.KubePodTemplateList = exports.KubePodTemplate = exports.KubePodList = exports.KubePod = exports.KubePersistentVolumeList = exports.KubePersistentVolumeClaimList = exports.KubePersistentVolumeClaim = exports.KubePersistentVolume = exports.KubeNodeList = exports.KubeNode = exports.KubeNamespaceList = exports.KubeNamespace = exports.KubeLimitRangeList = exports.KubeLimitRange = exports.KubeEventList = exports.KubeEvent = exports.KubeEndpointsList = exports.KubeEndpoints = exports.KubeConfigMapList = exports.KubeConfigMap = exports.KubeComponentStatusList = exports.KubeComponentStatus = exports.KubeBinding = exports.KubeLeaseListV1Beta1 = exports.KubeLeaseV1Beta1 = exports.KubeLeaseList = exports.KubeLease = exports.KubeCertificateSigningRequestListV1Beta1 = exports.KubeCertificateSigningRequestV1Beta1 = exports.KubeCronJobListV2Alpha1 = exports.KubeCronJobV2Alpha1 = exports.KubeCronJobListV1Beta1 = exports.KubeCronJobV1Beta1 = exports.KubeJobList = exports.KubeJob = exports.KubeHorizontalPodAutoscalerListV2Beta2 = void 0;
exports.KubeStorageClass = exports.KubePodPresetListV1Alpha1 = exports.KubePodPresetV1Alpha1 = exports.KubePriorityClassListV1Beta1 = exports.KubePriorityClassV1Beta1 = exports.KubePriorityClassListV1Alpha1 = exports.KubePriorityClassV1Alpha1 = exports.KubePriorityClassList = exports.KubePriorityClass = exports.KubeRoleListV1Beta1 = exports.KubeRoleBindingListV1Beta1 = exports.KubeRoleBindingV1Beta1 = exports.KubeRoleV1Beta1 = exports.KubeClusterRoleListV1Beta1 = exports.KubeClusterRoleBindingListV1Beta1 = exports.KubeClusterRoleBindingV1Beta1 = exports.KubeClusterRoleV1Beta1 = exports.KubeRoleListV1Alpha1 = exports.KubeRoleBindingListV1Alpha1 = exports.KubeRoleBindingV1Alpha1 = exports.KubeRoleV1Alpha1 = exports.KubeClusterRoleListV1Alpha1 = exports.KubeClusterRoleBindingListV1Alpha1 = exports.KubeClusterRoleBindingV1Alpha1 = exports.KubeClusterRoleV1Alpha1 = exports.KubeRoleList = exports.KubeRoleBindingList = exports.KubeRoleBinding = exports.KubeRole = exports.KubeClusterRoleList = exports.KubeClusterRoleBindingList = exports.KubeClusterRoleBinding = exports.KubeClusterRole = exports.KubePodDisruptionBudgetListV1Beta1 = exports.KubePodDisruptionBudgetV1Beta1 = exports.KubeEvictionV1Beta1 = exports.KubeRuntimeClassListV1Beta1 = exports.KubeRuntimeClassV1Beta1 = exports.KubeRuntimeClassListV1Alpha1 = exports.KubeRuntimeClassV1Alpha1 = exports.KubeNetworkPolicyList = exports.KubeNetworkPolicy = exports.KubeReplicaSetListV1Beta1 = exports.KubeReplicaSetV1Beta1 = exports.KubePodSecurityPolicyListV1Beta1 = exports.KubePodSecurityPolicyV1Beta1 = exports.KubeNetworkPolicyListV1Beta1 = exports.KubeNetworkPolicyV1Beta1 = exports.KubeIngressListV1Beta1 = exports.KubeIngressV1Beta1 = void 0;
exports.toJson_KubeScaleV1Beta2Props = exports.toJson_KubeReplicaSetListV1Beta2Props = exports.toJson_KubeReplicaSetV1Beta2Props = exports.toJson_KubeDeploymentListV1Beta2Props = exports.toJson_KubeDeploymentV1Beta2Props = exports.toJson_KubeDaemonSetListV1Beta2Props = exports.toJson_KubeDaemonSetV1Beta2Props = exports.toJson_KubeControllerRevisionListV1Beta2Props = exports.toJson_KubeControllerRevisionV1Beta2Props = exports.toJson_KubeStatefulSetListV1Beta1Props = exports.toJson_KubeStatefulSetV1Beta1Props = exports.toJson_KubeScaleV1Beta1Props = exports.toJson_KubeDeploymentListV1Beta1Props = exports.toJson_KubeDeploymentV1Beta1Props = exports.toJson_KubeControllerRevisionListV1Beta1Props = exports.toJson_KubeControllerRevisionV1Beta1Props = exports.toJson_KubeStatefulSetListProps = exports.toJson_KubeStatefulSetProps = exports.toJson_KubeReplicaSetListProps = exports.toJson_KubeReplicaSetProps = exports.toJson_KubeDeploymentListProps = exports.toJson_KubeDeploymentProps = exports.toJson_KubeDaemonSetListProps = exports.toJson_KubeDaemonSetProps = exports.toJson_KubeControllerRevisionListProps = exports.toJson_KubeControllerRevisionProps = exports.toJson_KubeValidatingWebhookConfigurationListV1Beta1Props = exports.toJson_KubeValidatingWebhookConfigurationV1Beta1Props = exports.toJson_KubeMutatingWebhookConfigurationListV1Beta1Props = exports.toJson_KubeMutatingWebhookConfigurationV1Beta1Props = exports.KubeApiServiceListV1Beta1 = exports.KubeApiServiceV1Beta1 = exports.KubeApiServiceList = exports.KubeApiService = exports.KubeStatus = exports.KubeCustomResourceDefinitionListV1Beta1 = exports.KubeCustomResourceDefinitionV1Beta1 = exports.KubeVolumeAttachmentListV1Beta1 = exports.KubeVolumeAttachmentV1Beta1 = exports.KubeStorageClassListV1Beta1 = exports.KubeStorageClassV1Beta1 = exports.KubeCsiNodeListV1Beta1 = exports.KubeCsiNodeV1Beta1 = exports.KubeCsiDriverListV1Beta1 = exports.KubeCsiDriverV1Beta1 = exports.KubeVolumeAttachmentListV1Alpha1 = exports.KubeVolumeAttachmentV1Alpha1 = exports.KubeVolumeAttachmentList = exports.KubeVolumeAttachment = exports.KubeStorageClassList = void 0;
exports.toJson_KubePersistentVolumeClaimProps = exports.toJson_KubePersistentVolumeProps = exports.toJson_KubeNodeListProps = exports.toJson_KubeNodeProps = exports.toJson_KubeNamespaceListProps = exports.toJson_KubeNamespaceProps = exports.toJson_KubeLimitRangeListProps = exports.toJson_KubeLimitRangeProps = exports.toJson_KubeEventListProps = exports.toJson_KubeEventProps = exports.toJson_KubeEndpointsListProps = exports.toJson_KubeEndpointsProps = exports.toJson_KubeConfigMapListProps = exports.toJson_KubeConfigMapProps = exports.toJson_KubeComponentStatusListProps = exports.toJson_KubeComponentStatusProps = exports.toJson_KubeBindingProps = exports.toJson_KubeLeaseListV1Beta1Props = exports.toJson_KubeLeaseV1Beta1Props = exports.toJson_KubeLeaseListProps = exports.toJson_KubeLeaseProps = exports.toJson_KubeCertificateSigningRequestListV1Beta1Props = exports.toJson_KubeCertificateSigningRequestV1Beta1Props = exports.toJson_KubeCronJobListV2Alpha1Props = exports.toJson_KubeCronJobV2Alpha1Props = exports.toJson_KubeCronJobListV1Beta1Props = exports.toJson_KubeCronJobV1Beta1Props = exports.toJson_KubeJobListProps = exports.toJson_KubeJobProps = exports.toJson_KubeHorizontalPodAutoscalerListV2Beta2Props = exports.toJson_KubeHorizontalPodAutoscalerV2Beta2Props = exports.toJson_KubeHorizontalPodAutoscalerListV2Beta1Props = exports.toJson_KubeHorizontalPodAutoscalerV2Beta1Props = exports.toJson_KubeScaleProps = exports.toJson_KubeHorizontalPodAutoscalerListProps = exports.toJson_KubeHorizontalPodAutoscalerProps = exports.toJson_KubeSubjectAccessReviewV1Beta1Props = exports.toJson_KubeSelfSubjectRulesReviewV1Beta1Props = exports.toJson_KubeSelfSubjectAccessReviewV1Beta1Props = exports.toJson_KubeLocalSubjectAccessReviewV1Beta1Props = exports.toJson_KubeSubjectAccessReviewProps = exports.toJson_KubeSelfSubjectRulesReviewProps = exports.toJson_KubeSelfSubjectAccessReviewProps = exports.toJson_KubeLocalSubjectAccessReviewProps = exports.toJson_KubeTokenReviewV1Beta1Props = exports.toJson_KubeTokenReviewProps = exports.toJson_KubeAuditSinkListV1Alpha1Props = exports.toJson_KubeAuditSinkV1Alpha1Props = exports.toJson_KubeStatefulSetListV1Beta2Props = exports.toJson_KubeStatefulSetV1Beta2Props = void 0;
exports.toJson_KubeRoleV1Alpha1Props = exports.toJson_KubeClusterRoleListV1Alpha1Props = exports.toJson_KubeClusterRoleBindingListV1Alpha1Props = exports.toJson_KubeClusterRoleBindingV1Alpha1Props = exports.toJson_KubeClusterRoleV1Alpha1Props = exports.toJson_KubeRoleListProps = exports.toJson_KubeRoleBindingListProps = exports.toJson_KubeRoleBindingProps = exports.toJson_KubeRoleProps = exports.toJson_KubeClusterRoleListProps = exports.toJson_KubeClusterRoleBindingListProps = exports.toJson_KubeClusterRoleBindingProps = exports.toJson_KubeClusterRoleProps = exports.toJson_KubePodDisruptionBudgetListV1Beta1Props = exports.toJson_KubePodDisruptionBudgetV1Beta1Props = exports.toJson_KubeEvictionV1Beta1Props = exports.toJson_KubeRuntimeClassListV1Beta1Props = exports.toJson_KubeRuntimeClassV1Beta1Props = exports.toJson_KubeRuntimeClassListV1Alpha1Props = exports.toJson_KubeRuntimeClassV1Alpha1Props = exports.toJson_KubeNetworkPolicyListProps = exports.toJson_KubeNetworkPolicyProps = exports.toJson_KubeReplicaSetListV1Beta1Props = exports.toJson_KubeReplicaSetV1Beta1Props = exports.toJson_KubePodSecurityPolicyListV1Beta1Props = exports.toJson_KubePodSecurityPolicyV1Beta1Props = exports.toJson_KubeNetworkPolicyListV1Beta1Props = exports.toJson_KubeNetworkPolicyV1Beta1Props = exports.toJson_KubeIngressListV1Beta1Props = exports.toJson_KubeIngressV1Beta1Props = exports.toJson_KubeDaemonSetListV1Beta1Props = exports.toJson_KubeDaemonSetV1Beta1Props = exports.toJson_KubeEventListV1Beta1Props = exports.toJson_KubeEventV1Beta1Props = exports.toJson_KubeServiceListProps = exports.toJson_KubeServiceAccountListProps = exports.toJson_KubeServiceAccountProps = exports.toJson_KubeServiceProps = exports.toJson_KubeSecretListProps = exports.toJson_KubeSecretProps = exports.toJson_KubeResourceQuotaListProps = exports.toJson_KubeResourceQuotaProps = exports.toJson_KubeReplicationControllerListProps = exports.toJson_KubeReplicationControllerProps = exports.toJson_KubePodTemplateListProps = exports.toJson_KubePodTemplateProps = exports.toJson_KubePodListProps = exports.toJson_KubePodProps = exports.toJson_KubePersistentVolumeListProps = exports.toJson_KubePersistentVolumeClaimListProps = void 0;
exports.toJson_DeploymentSpecV1Beta1 = exports.toJson_StatefulSetSpec = exports.toJson_ReplicaSetSpec = exports.toJson_DeploymentSpec = exports.toJson_DaemonSetSpec = exports.toJson_RawExtension = exports.toJson_ValidatingWebhookV1Beta1 = exports.toJson_ListMeta = exports.toJson_MutatingWebhookV1Beta1 = exports.toJson_ObjectMeta = exports.toJson_KubeApiServiceListV1Beta1Props = exports.toJson_KubeApiServiceV1Beta1Props = exports.toJson_KubeApiServiceListProps = exports.toJson_KubeApiServiceProps = exports.toJson_KubeStatusProps = exports.toJson_KubeCustomResourceDefinitionListV1Beta1Props = exports.toJson_KubeCustomResourceDefinitionV1Beta1Props = exports.toJson_KubeVolumeAttachmentListV1Beta1Props = exports.toJson_KubeVolumeAttachmentV1Beta1Props = exports.toJson_KubeStorageClassListV1Beta1Props = exports.toJson_KubeStorageClassV1Beta1Props = exports.toJson_KubeCsiNodeListV1Beta1Props = exports.toJson_KubeCsiNodeV1Beta1Props = exports.toJson_KubeCsiDriverListV1Beta1Props = exports.toJson_KubeCsiDriverV1Beta1Props = exports.toJson_KubeVolumeAttachmentListV1Alpha1Props = exports.toJson_KubeVolumeAttachmentV1Alpha1Props = exports.toJson_KubeVolumeAttachmentListProps = exports.toJson_KubeVolumeAttachmentProps = exports.toJson_KubeStorageClassListProps = exports.toJson_KubeStorageClassProps = exports.toJson_KubePodPresetListV1Alpha1Props = exports.toJson_KubePodPresetV1Alpha1Props = exports.toJson_KubePriorityClassListV1Beta1Props = exports.toJson_KubePriorityClassV1Beta1Props = exports.toJson_KubePriorityClassListV1Alpha1Props = exports.toJson_KubePriorityClassV1Alpha1Props = exports.toJson_KubePriorityClassListProps = exports.toJson_KubePriorityClassProps = exports.toJson_KubeRoleListV1Beta1Props = exports.toJson_KubeRoleBindingListV1Beta1Props = exports.toJson_KubeRoleBindingV1Beta1Props = exports.toJson_KubeRoleV1Beta1Props = exports.toJson_KubeClusterRoleListV1Beta1Props = exports.toJson_KubeClusterRoleBindingListV1Beta1Props = exports.toJson_KubeClusterRoleBindingV1Beta1Props = exports.toJson_KubeClusterRoleV1Beta1Props = exports.toJson_KubeRoleListV1Alpha1Props = exports.toJson_KubeRoleBindingListV1Alpha1Props = exports.toJson_KubeRoleBindingV1Alpha1Props = void 0;
exports.toJson_RuntimeClassSpecV1Alpha1 = exports.toJson_NetworkPolicySpec = exports.toJson_ReplicaSetSpecV1Beta1 = exports.toJson_PodSecurityPolicySpecV1Beta1 = exports.toJson_NetworkPolicySpecV1Beta1 = exports.toJson_IngressSpecV1Beta1 = exports.toJson_DaemonSetSpecV1Beta1 = exports.toJson_EventSeriesV1Beta1 = exports.toJson_LocalObjectReference = exports.toJson_ServiceSpec = exports.toJson_ResourceQuotaSpec = exports.toJson_ReplicationControllerSpec = exports.toJson_PodTemplateSpec = exports.toJson_PodSpec = exports.toJson_PersistentVolumeClaimSpec = exports.toJson_PersistentVolumeSpec = exports.toJson_NodeSpec = exports.toJson_NamespaceSpec = exports.toJson_LimitRangeSpec = exports.toJson_EventSource = exports.toJson_EventSeries = exports.toJson_EndpointSubset = exports.toJson_ComponentCondition = exports.toJson_ObjectReference = exports.toJson_LeaseSpecV1Beta1 = exports.toJson_LeaseSpec = exports.toJson_CertificateSigningRequestSpecV1Beta1 = exports.toJson_CronJobSpecV2Alpha1 = exports.toJson_CronJobSpecV1Beta1 = exports.toJson_JobSpec = exports.toJson_HorizontalPodAutoscalerSpecV2Beta2 = exports.toJson_HorizontalPodAutoscalerSpecV2Beta1 = exports.toJson_ScaleSpec = exports.toJson_HorizontalPodAutoscalerSpec = exports.toJson_SelfSubjectRulesReviewSpecV1Beta1 = exports.toJson_SelfSubjectAccessReviewSpecV1Beta1 = exports.toJson_SubjectAccessReviewSpecV1Beta1 = exports.toJson_SelfSubjectRulesReviewSpec = exports.toJson_SelfSubjectAccessReviewSpec = exports.toJson_SubjectAccessReviewSpec = exports.toJson_TokenReviewSpecV1Beta1 = exports.toJson_TokenReviewSpec = exports.toJson_AuditSinkSpecV1Alpha1 = exports.toJson_StatefulSetSpecV1Beta2 = exports.toJson_ScaleSpecV1Beta2 = exports.toJson_ReplicaSetSpecV1Beta2 = exports.toJson_DeploymentSpecV1Beta2 = exports.toJson_DaemonSetSpecV1Beta2 = exports.toJson_StatefulSetSpecV1Beta1 = exports.toJson_ScaleSpecV1Beta1 = void 0;
exports.toJson_MetricSpecV2Beta2 = exports.toJson_CrossVersionObjectReferenceV2Beta1 = exports.toJson_MetricSpecV2Beta1 = exports.toJson_CrossVersionObjectReference = exports.toJson_ResourceAttributesV1Beta1 = exports.toJson_NonResourceAttributesV1Beta1 = exports.toJson_ResourceAttributes = exports.toJson_NonResourceAttributes = exports.toJson_WebhookV1Alpha1 = exports.toJson_PolicyV1Alpha1 = exports.toJson_StatefulSetUpdateStrategyV1Beta2 = exports.toJson_DeploymentStrategyV1Beta2 = exports.toJson_DaemonSetUpdateStrategyV1Beta2 = exports.toJson_StatefulSetUpdateStrategyV1Beta1 = exports.toJson_DeploymentStrategyV1Beta1 = exports.toJson_RollbackConfigV1Beta1 = exports.toJson_StatefulSetUpdateStrategy = exports.toJson_DeploymentStrategy = exports.toJson_DaemonSetUpdateStrategy = exports.toJson_RuleWithOperationsV1Beta1 = exports.toJson_LabelSelector = exports.toJson_WebhookClientConfigV1Beta1 = exports.toJson_OwnerReference = exports.toJson_ManagedFieldsEntry = exports.toJson_Initializers = exports.toJson_ApiServiceSpecV1Beta1 = exports.toJson_ApiServiceSpec = exports.toJson_StatusDetails = exports.toJson_CustomResourceDefinitionSpecV1Beta1 = exports.toJson_VolumeAttachmentSpecV1Beta1 = exports.toJson_CsiNodeSpecV1Beta1 = exports.toJson_CsiDriverSpecV1Beta1 = exports.toJson_VolumeAttachmentSpecV1Alpha1 = exports.toJson_VolumeAttachmentSpec = exports.toJson_TopologySelectorTerm = exports.toJson_PodPresetSpecV1Alpha1 = exports.toJson_SubjectV1Beta1 = exports.toJson_RoleRefV1Beta1 = exports.toJson_PolicyRuleV1Beta1 = exports.toJson_AggregationRuleV1Beta1 = exports.toJson_SubjectV1Alpha1 = exports.toJson_RoleRefV1Alpha1 = exports.toJson_PolicyRuleV1Alpha1 = exports.toJson_AggregationRuleV1Alpha1 = exports.toJson_Subject = exports.toJson_RoleRef = exports.toJson_PolicyRule = exports.toJson_AggregationRule = exports.toJson_PodDisruptionBudgetSpecV1Beta1 = exports.toJson_DeleteOptions = void 0;
exports.toJson_NetworkPolicyEgressRuleV1Beta1 = exports.toJson_IngressTlsv1Beta1 = exports.toJson_IngressRuleV1Beta1 = exports.toJson_IngressBackendV1Beta1 = exports.toJson_DaemonSetUpdateStrategyV1Beta1 = exports.toJson_SessionAffinityConfig = exports.toJson_ServicePort = exports.toJson_ScopeSelector = exports.toJson_Volume = exports.toJson_Toleration = exports.toJson_PodSecurityContext = exports.toJson_PodReadinessGate = exports.toJson_HostAlias = exports.toJson_PodDnsConfig = exports.toJson_Container = exports.toJson_Affinity = exports.toJson_ResourceRequirements = exports.toJson_TypedLocalObjectReference = exports.toJson_VsphereVirtualDiskVolumeSource = exports.toJson_StorageOsPersistentVolumeSource = exports.toJson_ScaleIoPersistentVolumeSource = exports.toJson_RbdPersistentVolumeSource = exports.toJson_QuobyteVolumeSource = exports.toJson_PortworxVolumeSource = exports.toJson_PhotonPersistentDiskVolumeSource = exports.toJson_VolumeNodeAffinity = exports.toJson_NfsVolumeSource = exports.toJson_LocalVolumeSource = exports.toJson_IscsiPersistentVolumeSource = exports.toJson_HostPathVolumeSource = exports.toJson_GlusterfsPersistentVolumeSource = exports.toJson_GcePersistentDiskVolumeSource = exports.toJson_FlockerVolumeSource = exports.toJson_FlexPersistentVolumeSource = exports.toJson_FcVolumeSource = exports.toJson_CsiPersistentVolumeSource = exports.toJson_CinderPersistentVolumeSource = exports.toJson_CephFsPersistentVolumeSource = exports.Quantity = exports.toJson_AzureFilePersistentVolumeSource = exports.toJson_AzureDiskVolumeSource = exports.toJson_AwsElasticBlockStoreVolumeSource = exports.toJson_Taint = exports.toJson_NodeConfigSource = exports.toJson_LimitRangeItem = exports.toJson_EndpointPort = exports.toJson_EndpointAddress = exports.toJson_JobTemplateSpecV2Alpha1 = exports.toJson_JobTemplateSpecV1Beta1 = exports.toJson_CrossVersionObjectReferenceV2Beta2 = void 0;
exports.toJson_ExternalMetricSourceV2Beta2 = exports.toJson_ResourceMetricSourceV2Beta1 = exports.toJson_PodsMetricSourceV2Beta1 = exports.toJson_ObjectMetricSourceV2Beta1 = exports.toJson_ExternalMetricSourceV2Beta1 = exports.toJson_WebhookThrottleConfigV1Alpha1 = exports.toJson_WebhookClientConfigV1Alpha1 = exports.toJson_RollingUpdateStatefulSetStrategyV1Beta2 = exports.toJson_RollingUpdateDeploymentV1Beta2 = exports.toJson_RollingUpdateDaemonSetV1Beta2 = exports.toJson_RollingUpdateStatefulSetStrategyV1Beta1 = exports.toJson_RollingUpdateDeploymentV1Beta1 = exports.toJson_RollingUpdateStatefulSetStrategy = exports.toJson_RollingUpdateDeployment = exports.toJson_RollingUpdateDaemonSet = exports.toJson_LabelSelectorRequirement = exports.toJson_Initializer = exports.toJson_ServiceReferenceV1Beta1 = exports.toJson_ServiceReference = exports.toJson_StatusCause = exports.toJson_CustomResourceDefinitionVersionV1Beta1 = exports.toJson_CustomResourceValidationV1Beta1 = exports.toJson_CustomResourceSubresourcesV1Beta1 = exports.toJson_CustomResourceDefinitionNamesV1Beta1 = exports.toJson_CustomResourceConversionV1Beta1 = exports.toJson_CustomResourceColumnDefinitionV1Beta1 = exports.toJson_VolumeAttachmentSourceV1Beta1 = exports.toJson_CsiNodeDriverV1Beta1 = exports.toJson_VolumeAttachmentSourceV1Alpha1 = exports.toJson_VolumeAttachmentSource = exports.toJson_TopologySelectorLabelRequirement = exports.toJson_VolumeMount = exports.toJson_EnvFromSource = exports.toJson_EnvVar = exports.IntOrString = exports.toJson_Preconditions = exports.IoK8SApimachineryPkgApisMetaV1DeleteOptionsKind = exports.toJson_NetworkPolicyIngressRule = exports.toJson_NetworkPolicyEgressRule = exports.toJson_SupplementalGroupsStrategyOptionsV1Beta1 = exports.toJson_SeLinuxStrategyOptionsV1Beta1 = exports.toJson_RuntimeClassStrategyOptionsV1Beta1 = exports.toJson_RunAsUserStrategyOptionsV1Beta1 = exports.toJson_RunAsGroupStrategyOptionsV1Beta1 = exports.toJson_HostPortRangeV1Beta1 = exports.toJson_FsGroupStrategyOptionsV1Beta1 = exports.toJson_AllowedHostPathV1Beta1 = exports.toJson_AllowedFlexVolumeV1Beta1 = exports.toJson_AllowedCsiDriverV1Beta1 = exports.toJson_NetworkPolicyIngressRuleV1Beta1 = void 0;
exports.toJson_ServiceReferenceV1Alpha1 = exports.toJson_JsonSchemaPropsV1Beta1 = exports.toJson_CustomResourceSubresourceScaleV1Beta1 = exports.toJson_SecretEnvSource = exports.toJson_ConfigMapEnvSource = exports.toJson_EnvVarSource = exports.toJson_NetworkPolicyPeer = exports.toJson_NetworkPolicyPort = exports.toJson_IdRangeV1Beta1 = exports.toJson_NetworkPolicyPeerV1Beta1 = exports.toJson_NetworkPolicyPortV1Beta1 = exports.toJson_HttpIngressRuleValueV1Beta1 = exports.toJson_RollingUpdateDaemonSetV1Beta1 = exports.toJson_ClientIpConfig = exports.toJson_ScopedResourceSelectorRequirement = exports.toJson_StorageOsVolumeSource = exports.toJson_SecretVolumeSource = exports.toJson_ScaleIoVolumeSource = exports.toJson_RbdVolumeSource = exports.toJson_ProjectedVolumeSource = exports.toJson_PersistentVolumeClaimVolumeSource = exports.toJson_IscsiVolumeSource = exports.toJson_GlusterfsVolumeSource = exports.toJson_GitRepoVolumeSource = exports.toJson_FlexVolumeSource = exports.toJson_EmptyDirVolumeSource = exports.toJson_DownwardApiVolumeSource = exports.toJson_CsiVolumeSource = exports.toJson_ConfigMapVolumeSource = exports.toJson_CinderVolumeSource = exports.toJson_CephFsVolumeSource = exports.toJson_AzureFileVolumeSource = exports.toJson_WindowsSecurityContextOptions = exports.toJson_Sysctl = exports.toJson_SeLinuxOptions = exports.toJson_PodDnsConfigOption = exports.toJson_VolumeDevice = exports.toJson_SecurityContext = exports.toJson_ContainerPort = exports.toJson_Probe = exports.toJson_Lifecycle = exports.toJson_PodAntiAffinity = exports.toJson_PodAffinity = exports.toJson_NodeAffinity = exports.toJson_NodeSelector = exports.toJson_SecretReference = exports.toJson_ConfigMapNodeConfigSource = exports.toJson_ResourceMetricSourceV2Beta2 = exports.toJson_PodsMetricSourceV2Beta2 = exports.toJson_ObjectMetricSourceV2Beta2 = void 0;
exports.toJson_ServiceAccountTokenProjection = exports.toJson_SecretProjection = exports.toJson_DownwardApiProjection = exports.toJson_ConfigMapProjection = exports.toJson_HttpHeader = exports.toJson_NodeSelectorRequirement = exports.toJson_ExternalDocumentationV1Beta1 = exports.toJson_SecretKeySelector = exports.toJson_ResourceFieldSelector = exports.toJson_ObjectFieldSelector = exports.toJson_ConfigMapKeySelector = exports.toJson_IpBlock = exports.toJson_IpBlockV1Beta1 = exports.toJson_HttpIngressPathV1Beta1 = exports.toJson_VolumeProjection = exports.toJson_DownwardApiVolumeFile = exports.toJson_KeyToPath = exports.toJson_Capabilities = exports.toJson_TcpSocketAction = exports.toJson_HttpGetAction = exports.toJson_ExecAction = exports.toJson_Handler = exports.toJson_PodAffinityTerm = exports.toJson_WeightedPodAffinityTerm = exports.toJson_PreferredSchedulingTerm = exports.toJson_NodeSelectorTerm = exports.toJson_MetricTargetV2Beta2 = exports.toJson_MetricIdentifierV2Beta2 = void 0;
// generated by cdk8s
const cdk8s_1 = require("cdk8s");
/**
 * MutatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and may change the object.
 *
 * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfiguration
 */
class KubeMutatingWebhookConfigurationV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfiguration" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeMutatingWebhookConfigurationV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfiguration".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeMutatingWebhookConfigurationV1Beta1.GVK), toJson_KubeMutatingWebhookConfigurationV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeMutatingWebhookConfigurationV1Beta1.GVK), toJson_KubeMutatingWebhookConfigurationV1Beta1Props(resolved));
    }
}
exports.KubeMutatingWebhookConfigurationV1Beta1 = KubeMutatingWebhookConfigurationV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfiguration"
 */
KubeMutatingWebhookConfigurationV1Beta1.GVK = {
    apiVersion: 'admissionregistration.k8s.io/v1beta1',
    kind: 'MutatingWebhookConfiguration',
};
/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 *
 * @schema io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfigurationList
 */
class KubeMutatingWebhookConfigurationListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfigurationList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeMutatingWebhookConfigurationListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfigurationList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeMutatingWebhookConfigurationListV1Beta1.GVK), toJson_KubeMutatingWebhookConfigurationListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeMutatingWebhookConfigurationListV1Beta1.GVK), toJson_KubeMutatingWebhookConfigurationListV1Beta1Props(resolved));
    }
}
exports.KubeMutatingWebhookConfigurationListV1Beta1 = KubeMutatingWebhookConfigurationListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.admissionregistration.v1beta1.MutatingWebhookConfigurationList"
 */
KubeMutatingWebhookConfigurationListV1Beta1.GVK = {
    apiVersion: 'admissionregistration.k8s.io/v1beta1',
    kind: 'MutatingWebhookConfigurationList',
};
/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
 *
 * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfiguration
 */
class KubeValidatingWebhookConfigurationV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfiguration" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeValidatingWebhookConfigurationV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfiguration".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeValidatingWebhookConfigurationV1Beta1.GVK), toJson_KubeValidatingWebhookConfigurationV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeValidatingWebhookConfigurationV1Beta1.GVK), toJson_KubeValidatingWebhookConfigurationV1Beta1Props(resolved));
    }
}
exports.KubeValidatingWebhookConfigurationV1Beta1 = KubeValidatingWebhookConfigurationV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfiguration"
 */
KubeValidatingWebhookConfigurationV1Beta1.GVK = {
    apiVersion: 'admissionregistration.k8s.io/v1beta1',
    kind: 'ValidatingWebhookConfiguration',
};
/**
 * ValidatingWebhookConfigurationList is a list of ValidatingWebhookConfiguration.
 *
 * @schema io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfigurationList
 */
class KubeValidatingWebhookConfigurationListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfigurationList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeValidatingWebhookConfigurationListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfigurationList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeValidatingWebhookConfigurationListV1Beta1.GVK), toJson_KubeValidatingWebhookConfigurationListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeValidatingWebhookConfigurationListV1Beta1.GVK), toJson_KubeValidatingWebhookConfigurationListV1Beta1Props(resolved));
    }
}
exports.KubeValidatingWebhookConfigurationListV1Beta1 = KubeValidatingWebhookConfigurationListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.admissionregistration.v1beta1.ValidatingWebhookConfigurationList"
 */
KubeValidatingWebhookConfigurationListV1Beta1.GVK = {
    apiVersion: 'admissionregistration.k8s.io/v1beta1',
    kind: 'ValidatingWebhookConfigurationList',
};
/**
 * ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 *
 * @schema io.k8s.api.apps.v1.ControllerRevision
 */
class KubeControllerRevision extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1.ControllerRevision" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeControllerRevision.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.ControllerRevision".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeControllerRevision.GVK), toJson_KubeControllerRevisionProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeControllerRevision.GVK), toJson_KubeControllerRevisionProps(resolved));
    }
}
exports.KubeControllerRevision = KubeControllerRevision;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1.ControllerRevision"
 */
KubeControllerRevision.GVK = {
    apiVersion: 'apps/v1',
    kind: 'ControllerRevision',
};
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 *
 * @schema io.k8s.api.apps.v1.ControllerRevisionList
 */
class KubeControllerRevisionList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1.ControllerRevisionList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeControllerRevisionList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.ControllerRevisionList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeControllerRevisionList.GVK), toJson_KubeControllerRevisionListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeControllerRevisionList.GVK), toJson_KubeControllerRevisionListProps(resolved));
    }
}
exports.KubeControllerRevisionList = KubeControllerRevisionList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1.ControllerRevisionList"
 */
KubeControllerRevisionList.GVK = {
    apiVersion: 'apps/v1',
    kind: 'ControllerRevisionList',
};
/**
 * DaemonSet represents the configuration of a daemon set.
 *
 * @schema io.k8s.api.apps.v1.DaemonSet
 */
class KubeDaemonSet extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1.DaemonSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeDaemonSet.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.DaemonSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeDaemonSet.GVK), toJson_KubeDaemonSetProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeDaemonSet.GVK), toJson_KubeDaemonSetProps(resolved));
    }
}
exports.KubeDaemonSet = KubeDaemonSet;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1.DaemonSet"
 */
KubeDaemonSet.GVK = {
    apiVersion: 'apps/v1',
    kind: 'DaemonSet',
};
/**
 * DaemonSetList is a collection of daemon sets.
 *
 * @schema io.k8s.api.apps.v1.DaemonSetList
 */
class KubeDaemonSetList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1.DaemonSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeDaemonSetList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.DaemonSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeDaemonSetList.GVK), toJson_KubeDaemonSetListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeDaemonSetList.GVK), toJson_KubeDaemonSetListProps(resolved));
    }
}
exports.KubeDaemonSetList = KubeDaemonSetList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1.DaemonSetList"
 */
KubeDaemonSetList.GVK = {
    apiVersion: 'apps/v1',
    kind: 'DaemonSetList',
};
/**
 * Deployment enables declarative updates for Pods and ReplicaSets.
 *
 * @schema io.k8s.api.apps.v1.Deployment
 */
class KubeDeployment extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1.Deployment" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeDeployment.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.Deployment".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeDeployment.GVK), toJson_KubeDeploymentProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeDeployment.GVK), toJson_KubeDeploymentProps(resolved));
    }
}
exports.KubeDeployment = KubeDeployment;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1.Deployment"
 */
KubeDeployment.GVK = {
    apiVersion: 'apps/v1',
    kind: 'Deployment',
};
/**
 * DeploymentList is a list of Deployments.
 *
 * @schema io.k8s.api.apps.v1.DeploymentList
 */
class KubeDeploymentList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1.DeploymentList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeDeploymentList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.DeploymentList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeDeploymentList.GVK), toJson_KubeDeploymentListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeDeploymentList.GVK), toJson_KubeDeploymentListProps(resolved));
    }
}
exports.KubeDeploymentList = KubeDeploymentList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1.DeploymentList"
 */
KubeDeploymentList.GVK = {
    apiVersion: 'apps/v1',
    kind: 'DeploymentList',
};
/**
 * ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 *
 * @schema io.k8s.api.apps.v1.ReplicaSet
 */
class KubeReplicaSet extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1.ReplicaSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeReplicaSet.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.ReplicaSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeReplicaSet.GVK), toJson_KubeReplicaSetProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeReplicaSet.GVK), toJson_KubeReplicaSetProps(resolved));
    }
}
exports.KubeReplicaSet = KubeReplicaSet;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1.ReplicaSet"
 */
KubeReplicaSet.GVK = {
    apiVersion: 'apps/v1',
    kind: 'ReplicaSet',
};
/**
 * ReplicaSetList is a collection of ReplicaSets.
 *
 * @schema io.k8s.api.apps.v1.ReplicaSetList
 */
class KubeReplicaSetList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1.ReplicaSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeReplicaSetList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.ReplicaSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeReplicaSetList.GVK), toJson_KubeReplicaSetListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeReplicaSetList.GVK), toJson_KubeReplicaSetListProps(resolved));
    }
}
exports.KubeReplicaSetList = KubeReplicaSetList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1.ReplicaSetList"
 */
KubeReplicaSetList.GVK = {
    apiVersion: 'apps/v1',
    kind: 'ReplicaSetList',
};
/**
 * StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 - Network: A single stable DNS and hostname.
 - Storage: As many VolumeClaims as requested.
The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 *
 * @schema io.k8s.api.apps.v1.StatefulSet
 */
class KubeStatefulSet extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1.StatefulSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeStatefulSet.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.StatefulSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeStatefulSet.GVK), toJson_KubeStatefulSetProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeStatefulSet.GVK), toJson_KubeStatefulSetProps(resolved));
    }
}
exports.KubeStatefulSet = KubeStatefulSet;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1.StatefulSet"
 */
KubeStatefulSet.GVK = {
    apiVersion: 'apps/v1',
    kind: 'StatefulSet',
};
/**
 * StatefulSetList is a collection of StatefulSets.
 *
 * @schema io.k8s.api.apps.v1.StatefulSetList
 */
class KubeStatefulSetList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1.StatefulSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeStatefulSetList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1.StatefulSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeStatefulSetList.GVK), toJson_KubeStatefulSetListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeStatefulSetList.GVK), toJson_KubeStatefulSetListProps(resolved));
    }
}
exports.KubeStatefulSetList = KubeStatefulSetList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1.StatefulSetList"
 */
KubeStatefulSetList.GVK = {
    apiVersion: 'apps/v1',
    kind: 'StatefulSetList',
};
/**
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1beta2/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 *
 * @schema io.k8s.api.apps.v1beta1.ControllerRevision
 */
class KubeControllerRevisionV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta1.ControllerRevision" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeControllerRevisionV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta1.ControllerRevision".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeControllerRevisionV1Beta1.GVK), toJson_KubeControllerRevisionV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeControllerRevisionV1Beta1.GVK), toJson_KubeControllerRevisionV1Beta1Props(resolved));
    }
}
exports.KubeControllerRevisionV1Beta1 = KubeControllerRevisionV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta1.ControllerRevision"
 */
KubeControllerRevisionV1Beta1.GVK = {
    apiVersion: 'apps/v1beta1',
    kind: 'ControllerRevision',
};
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 *
 * @schema io.k8s.api.apps.v1beta1.ControllerRevisionList
 */
class KubeControllerRevisionListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta1.ControllerRevisionList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeControllerRevisionListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta1.ControllerRevisionList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeControllerRevisionListV1Beta1.GVK), toJson_KubeControllerRevisionListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeControllerRevisionListV1Beta1.GVK), toJson_KubeControllerRevisionListV1Beta1Props(resolved));
    }
}
exports.KubeControllerRevisionListV1Beta1 = KubeControllerRevisionListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta1.ControllerRevisionList"
 */
KubeControllerRevisionListV1Beta1.GVK = {
    apiVersion: 'apps/v1beta1',
    kind: 'ControllerRevisionList',
};
/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1beta2/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 *
 * @schema io.k8s.api.extensions.v1beta1.Deployment
 */
class KubeDeploymentV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.Deployment" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeDeploymentV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.Deployment".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeDeploymentV1Beta1.GVK), toJson_KubeDeploymentV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeDeploymentV1Beta1.GVK), toJson_KubeDeploymentV1Beta1Props(resolved));
    }
}
exports.KubeDeploymentV1Beta1 = KubeDeploymentV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.Deployment"
 */
KubeDeploymentV1Beta1.GVK = {
    apiVersion: 'extensions/v1beta1',
    kind: 'Deployment',
};
/**
 * DeploymentList is a list of Deployments.
 *
 * @schema io.k8s.api.extensions.v1beta1.DeploymentList
 */
class KubeDeploymentListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.DeploymentList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeDeploymentListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.DeploymentList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeDeploymentListV1Beta1.GVK), toJson_KubeDeploymentListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeDeploymentListV1Beta1.GVK), toJson_KubeDeploymentListV1Beta1Props(resolved));
    }
}
exports.KubeDeploymentListV1Beta1 = KubeDeploymentListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.DeploymentList"
 */
KubeDeploymentListV1Beta1.GVK = {
    apiVersion: 'extensions/v1beta1',
    kind: 'DeploymentList',
};
/**
 * represents a scaling request for a resource.
 *
 * @schema io.k8s.api.extensions.v1beta1.Scale
 */
class KubeScaleV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.Scale" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeScaleV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.Scale".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeScaleV1Beta1.GVK), toJson_KubeScaleV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeScaleV1Beta1.GVK), toJson_KubeScaleV1Beta1Props(resolved));
    }
}
exports.KubeScaleV1Beta1 = KubeScaleV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.Scale"
 */
KubeScaleV1Beta1.GVK = {
    apiVersion: 'extensions/v1beta1',
    kind: 'Scale',
};
/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1beta2/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 - Network: A single stable DNS and hostname.
 - Storage: As many VolumeClaims as requested.
The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 *
 * @schema io.k8s.api.apps.v1beta1.StatefulSet
 */
class KubeStatefulSetV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta1.StatefulSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeStatefulSetV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta1.StatefulSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeStatefulSetV1Beta1.GVK), toJson_KubeStatefulSetV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeStatefulSetV1Beta1.GVK), toJson_KubeStatefulSetV1Beta1Props(resolved));
    }
}
exports.KubeStatefulSetV1Beta1 = KubeStatefulSetV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta1.StatefulSet"
 */
KubeStatefulSetV1Beta1.GVK = {
    apiVersion: 'apps/v1beta1',
    kind: 'StatefulSet',
};
/**
 * StatefulSetList is a collection of StatefulSets.
 *
 * @schema io.k8s.api.apps.v1beta1.StatefulSetList
 */
class KubeStatefulSetListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta1.StatefulSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeStatefulSetListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta1.StatefulSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeStatefulSetListV1Beta1.GVK), toJson_KubeStatefulSetListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeStatefulSetListV1Beta1.GVK), toJson_KubeStatefulSetListV1Beta1Props(resolved));
    }
}
exports.KubeStatefulSetListV1Beta1 = KubeStatefulSetListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta1.StatefulSetList"
 */
KubeStatefulSetListV1Beta1.GVK = {
    apiVersion: 'apps/v1beta1',
    kind: 'StatefulSetList',
};
/**
 * DEPRECATED - This group version of ControllerRevision is deprecated by apps/v1/ControllerRevision. See the release notes for more information. ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 *
 * @schema io.k8s.api.apps.v1beta2.ControllerRevision
 */
class KubeControllerRevisionV1Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta2.ControllerRevision" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeControllerRevisionV1Beta2.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.ControllerRevision".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeControllerRevisionV1Beta2.GVK), toJson_KubeControllerRevisionV1Beta2Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeControllerRevisionV1Beta2.GVK), toJson_KubeControllerRevisionV1Beta2Props(resolved));
    }
}
exports.KubeControllerRevisionV1Beta2 = KubeControllerRevisionV1Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.ControllerRevision"
 */
KubeControllerRevisionV1Beta2.GVK = {
    apiVersion: 'apps/v1beta2',
    kind: 'ControllerRevision',
};
/**
 * ControllerRevisionList is a resource containing a list of ControllerRevision objects.
 *
 * @schema io.k8s.api.apps.v1beta2.ControllerRevisionList
 */
class KubeControllerRevisionListV1Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta2.ControllerRevisionList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeControllerRevisionListV1Beta2.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.ControllerRevisionList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeControllerRevisionListV1Beta2.GVK), toJson_KubeControllerRevisionListV1Beta2Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeControllerRevisionListV1Beta2.GVK), toJson_KubeControllerRevisionListV1Beta2Props(resolved));
    }
}
exports.KubeControllerRevisionListV1Beta2 = KubeControllerRevisionListV1Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.ControllerRevisionList"
 */
KubeControllerRevisionListV1Beta2.GVK = {
    apiVersion: 'apps/v1beta2',
    kind: 'ControllerRevisionList',
};
/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 *
 * @schema io.k8s.api.apps.v1beta2.DaemonSet
 */
class KubeDaemonSetV1Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta2.DaemonSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeDaemonSetV1Beta2.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.DaemonSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeDaemonSetV1Beta2.GVK), toJson_KubeDaemonSetV1Beta2Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeDaemonSetV1Beta2.GVK), toJson_KubeDaemonSetV1Beta2Props(resolved));
    }
}
exports.KubeDaemonSetV1Beta2 = KubeDaemonSetV1Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.DaemonSet"
 */
KubeDaemonSetV1Beta2.GVK = {
    apiVersion: 'apps/v1beta2',
    kind: 'DaemonSet',
};
/**
 * DaemonSetList is a collection of daemon sets.
 *
 * @schema io.k8s.api.apps.v1beta2.DaemonSetList
 */
class KubeDaemonSetListV1Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta2.DaemonSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeDaemonSetListV1Beta2.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.DaemonSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeDaemonSetListV1Beta2.GVK), toJson_KubeDaemonSetListV1Beta2Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeDaemonSetListV1Beta2.GVK), toJson_KubeDaemonSetListV1Beta2Props(resolved));
    }
}
exports.KubeDaemonSetListV1Beta2 = KubeDaemonSetListV1Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.DaemonSetList"
 */
KubeDaemonSetListV1Beta2.GVK = {
    apiVersion: 'apps/v1beta2',
    kind: 'DaemonSetList',
};
/**
 * DEPRECATED - This group version of Deployment is deprecated by apps/v1/Deployment. See the release notes for more information. Deployment enables declarative updates for Pods and ReplicaSets.
 *
 * @schema io.k8s.api.apps.v1beta2.Deployment
 */
class KubeDeploymentV1Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta2.Deployment" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeDeploymentV1Beta2.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.Deployment".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeDeploymentV1Beta2.GVK), toJson_KubeDeploymentV1Beta2Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeDeploymentV1Beta2.GVK), toJson_KubeDeploymentV1Beta2Props(resolved));
    }
}
exports.KubeDeploymentV1Beta2 = KubeDeploymentV1Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.Deployment"
 */
KubeDeploymentV1Beta2.GVK = {
    apiVersion: 'apps/v1beta2',
    kind: 'Deployment',
};
/**
 * DeploymentList is a list of Deployments.
 *
 * @schema io.k8s.api.apps.v1beta2.DeploymentList
 */
class KubeDeploymentListV1Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta2.DeploymentList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeDeploymentListV1Beta2.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.DeploymentList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeDeploymentListV1Beta2.GVK), toJson_KubeDeploymentListV1Beta2Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeDeploymentListV1Beta2.GVK), toJson_KubeDeploymentListV1Beta2Props(resolved));
    }
}
exports.KubeDeploymentListV1Beta2 = KubeDeploymentListV1Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.DeploymentList"
 */
KubeDeploymentListV1Beta2.GVK = {
    apiVersion: 'apps/v1beta2',
    kind: 'DeploymentList',
};
/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 *
 * @schema io.k8s.api.apps.v1beta2.ReplicaSet
 */
class KubeReplicaSetV1Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta2.ReplicaSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeReplicaSetV1Beta2.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.ReplicaSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeReplicaSetV1Beta2.GVK), toJson_KubeReplicaSetV1Beta2Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeReplicaSetV1Beta2.GVK), toJson_KubeReplicaSetV1Beta2Props(resolved));
    }
}
exports.KubeReplicaSetV1Beta2 = KubeReplicaSetV1Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.ReplicaSet"
 */
KubeReplicaSetV1Beta2.GVK = {
    apiVersion: 'apps/v1beta2',
    kind: 'ReplicaSet',
};
/**
 * ReplicaSetList is a collection of ReplicaSets.
 *
 * @schema io.k8s.api.apps.v1beta2.ReplicaSetList
 */
class KubeReplicaSetListV1Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta2.ReplicaSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeReplicaSetListV1Beta2.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.ReplicaSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeReplicaSetListV1Beta2.GVK), toJson_KubeReplicaSetListV1Beta2Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeReplicaSetListV1Beta2.GVK), toJson_KubeReplicaSetListV1Beta2Props(resolved));
    }
}
exports.KubeReplicaSetListV1Beta2 = KubeReplicaSetListV1Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.ReplicaSetList"
 */
KubeReplicaSetListV1Beta2.GVK = {
    apiVersion: 'apps/v1beta2',
    kind: 'ReplicaSetList',
};
/**
 * Scale represents a scaling request for a resource.
 *
 * @schema io.k8s.api.apps.v1beta2.Scale
 */
class KubeScaleV1Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta2.Scale" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeScaleV1Beta2.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.Scale".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeScaleV1Beta2.GVK), toJson_KubeScaleV1Beta2Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeScaleV1Beta2.GVK), toJson_KubeScaleV1Beta2Props(resolved));
    }
}
exports.KubeScaleV1Beta2 = KubeScaleV1Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.Scale"
 */
KubeScaleV1Beta2.GVK = {
    apiVersion: 'apps/v1beta2',
    kind: 'Scale',
};
/**
 * DEPRECATED - This group version of StatefulSet is deprecated by apps/v1/StatefulSet. See the release notes for more information. StatefulSet represents a set of pods with consistent identities. Identities are defined as:
 - Network: A single stable DNS and hostname.
 - Storage: As many VolumeClaims as requested.
The StatefulSet guarantees that a given network identity will always map to the same storage identity.
 *
 * @schema io.k8s.api.apps.v1beta2.StatefulSet
 */
class KubeStatefulSetV1Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta2.StatefulSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeStatefulSetV1Beta2.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.StatefulSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeStatefulSetV1Beta2.GVK), toJson_KubeStatefulSetV1Beta2Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeStatefulSetV1Beta2.GVK), toJson_KubeStatefulSetV1Beta2Props(resolved));
    }
}
exports.KubeStatefulSetV1Beta2 = KubeStatefulSetV1Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.StatefulSet"
 */
KubeStatefulSetV1Beta2.GVK = {
    apiVersion: 'apps/v1beta2',
    kind: 'StatefulSet',
};
/**
 * StatefulSetList is a collection of StatefulSets.
 *
 * @schema io.k8s.api.apps.v1beta2.StatefulSetList
 */
class KubeStatefulSetListV1Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.apps.v1beta2.StatefulSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeStatefulSetListV1Beta2.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.apps.v1beta2.StatefulSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeStatefulSetListV1Beta2.GVK), toJson_KubeStatefulSetListV1Beta2Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeStatefulSetListV1Beta2.GVK), toJson_KubeStatefulSetListV1Beta2Props(resolved));
    }
}
exports.KubeStatefulSetListV1Beta2 = KubeStatefulSetListV1Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.apps.v1beta2.StatefulSetList"
 */
KubeStatefulSetListV1Beta2.GVK = {
    apiVersion: 'apps/v1beta2',
    kind: 'StatefulSetList',
};
/**
 * AuditSink represents a cluster level audit sink
 *
 * @schema io.k8s.api.auditregistration.v1alpha1.AuditSink
 */
class KubeAuditSinkV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.auditregistration.v1alpha1.AuditSink" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeAuditSinkV1Alpha1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.auditregistration.v1alpha1.AuditSink".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeAuditSinkV1Alpha1.GVK), toJson_KubeAuditSinkV1Alpha1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeAuditSinkV1Alpha1.GVK), toJson_KubeAuditSinkV1Alpha1Props(resolved));
    }
}
exports.KubeAuditSinkV1Alpha1 = KubeAuditSinkV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.auditregistration.v1alpha1.AuditSink"
 */
KubeAuditSinkV1Alpha1.GVK = {
    apiVersion: 'auditregistration.k8s.io/v1alpha1',
    kind: 'AuditSink',
};
/**
 * AuditSinkList is a list of AuditSink items.
 *
 * @schema io.k8s.api.auditregistration.v1alpha1.AuditSinkList
 */
class KubeAuditSinkListV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.auditregistration.v1alpha1.AuditSinkList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeAuditSinkListV1Alpha1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.auditregistration.v1alpha1.AuditSinkList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeAuditSinkListV1Alpha1.GVK), toJson_KubeAuditSinkListV1Alpha1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeAuditSinkListV1Alpha1.GVK), toJson_KubeAuditSinkListV1Alpha1Props(resolved));
    }
}
exports.KubeAuditSinkListV1Alpha1 = KubeAuditSinkListV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.auditregistration.v1alpha1.AuditSinkList"
 */
KubeAuditSinkListV1Alpha1.GVK = {
    apiVersion: 'auditregistration.k8s.io/v1alpha1',
    kind: 'AuditSinkList',
};
/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 *
 * @schema io.k8s.api.authentication.v1.TokenReview
 */
class KubeTokenReview extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.authentication.v1.TokenReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeTokenReview.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authentication.v1.TokenReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeTokenReview.GVK), toJson_KubeTokenReviewProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeTokenReview.GVK), toJson_KubeTokenReviewProps(resolved));
    }
}
exports.KubeTokenReview = KubeTokenReview;
/**
 * Returns the apiVersion and kind for "io.k8s.api.authentication.v1.TokenReview"
 */
KubeTokenReview.GVK = {
    apiVersion: 'authentication.k8s.io/v1',
    kind: 'TokenReview',
};
/**
 * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may be cached by the webhook token authenticator plugin in the kube-apiserver.
 *
 * @schema io.k8s.api.authentication.v1beta1.TokenReview
 */
class KubeTokenReviewV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.authentication.v1beta1.TokenReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeTokenReviewV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authentication.v1beta1.TokenReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeTokenReviewV1Beta1.GVK), toJson_KubeTokenReviewV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeTokenReviewV1Beta1.GVK), toJson_KubeTokenReviewV1Beta1Props(resolved));
    }
}
exports.KubeTokenReviewV1Beta1 = KubeTokenReviewV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.authentication.v1beta1.TokenReview"
 */
KubeTokenReviewV1Beta1.GVK = {
    apiVersion: 'authentication.k8s.io/v1beta1',
    kind: 'TokenReview',
};
/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 *
 * @schema io.k8s.api.authorization.v1.LocalSubjectAccessReview
 */
class KubeLocalSubjectAccessReview extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.authorization.v1.LocalSubjectAccessReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeLocalSubjectAccessReview.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1.LocalSubjectAccessReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeLocalSubjectAccessReview.GVK), toJson_KubeLocalSubjectAccessReviewProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeLocalSubjectAccessReview.GVK), toJson_KubeLocalSubjectAccessReviewProps(resolved));
    }
}
exports.KubeLocalSubjectAccessReview = KubeLocalSubjectAccessReview;
/**
 * Returns the apiVersion and kind for "io.k8s.api.authorization.v1.LocalSubjectAccessReview"
 */
KubeLocalSubjectAccessReview.GVK = {
    apiVersion: 'authorization.k8s.io/v1',
    kind: 'LocalSubjectAccessReview',
};
/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 *
 * @schema io.k8s.api.authorization.v1.SelfSubjectAccessReview
 */
class KubeSelfSubjectAccessReview extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.authorization.v1.SelfSubjectAccessReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeSelfSubjectAccessReview.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1.SelfSubjectAccessReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeSelfSubjectAccessReview.GVK), toJson_KubeSelfSubjectAccessReviewProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeSelfSubjectAccessReview.GVK), toJson_KubeSelfSubjectAccessReviewProps(resolved));
    }
}
exports.KubeSelfSubjectAccessReview = KubeSelfSubjectAccessReview;
/**
 * Returns the apiVersion and kind for "io.k8s.api.authorization.v1.SelfSubjectAccessReview"
 */
KubeSelfSubjectAccessReview.GVK = {
    apiVersion: 'authorization.k8s.io/v1',
    kind: 'SelfSubjectAccessReview',
};
/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 *
 * @schema io.k8s.api.authorization.v1.SelfSubjectRulesReview
 */
class KubeSelfSubjectRulesReview extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.authorization.v1.SelfSubjectRulesReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeSelfSubjectRulesReview.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1.SelfSubjectRulesReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeSelfSubjectRulesReview.GVK), toJson_KubeSelfSubjectRulesReviewProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeSelfSubjectRulesReview.GVK), toJson_KubeSelfSubjectRulesReviewProps(resolved));
    }
}
exports.KubeSelfSubjectRulesReview = KubeSelfSubjectRulesReview;
/**
 * Returns the apiVersion and kind for "io.k8s.api.authorization.v1.SelfSubjectRulesReview"
 */
KubeSelfSubjectRulesReview.GVK = {
    apiVersion: 'authorization.k8s.io/v1',
    kind: 'SelfSubjectRulesReview',
};
/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 *
 * @schema io.k8s.api.authorization.v1.SubjectAccessReview
 */
class KubeSubjectAccessReview extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.authorization.v1.SubjectAccessReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeSubjectAccessReview.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1.SubjectAccessReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeSubjectAccessReview.GVK), toJson_KubeSubjectAccessReviewProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeSubjectAccessReview.GVK), toJson_KubeSubjectAccessReviewProps(resolved));
    }
}
exports.KubeSubjectAccessReview = KubeSubjectAccessReview;
/**
 * Returns the apiVersion and kind for "io.k8s.api.authorization.v1.SubjectAccessReview"
 */
KubeSubjectAccessReview.GVK = {
    apiVersion: 'authorization.k8s.io/v1',
    kind: 'SubjectAccessReview',
};
/**
 * LocalSubjectAccessReview checks whether or not a user or group can perform an action in a given namespace. Having a namespace scoped resource makes it much easier to grant namespace scoped policy that includes permissions checking.
 *
 * @schema io.k8s.api.authorization.v1beta1.LocalSubjectAccessReview
 */
class KubeLocalSubjectAccessReviewV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.authorization.v1beta1.LocalSubjectAccessReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeLocalSubjectAccessReviewV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1beta1.LocalSubjectAccessReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeLocalSubjectAccessReviewV1Beta1.GVK), toJson_KubeLocalSubjectAccessReviewV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeLocalSubjectAccessReviewV1Beta1.GVK), toJson_KubeLocalSubjectAccessReviewV1Beta1Props(resolved));
    }
}
exports.KubeLocalSubjectAccessReviewV1Beta1 = KubeLocalSubjectAccessReviewV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.authorization.v1beta1.LocalSubjectAccessReview"
 */
KubeLocalSubjectAccessReviewV1Beta1.GVK = {
    apiVersion: 'authorization.k8s.io/v1beta1',
    kind: 'LocalSubjectAccessReview',
};
/**
 * SelfSubjectAccessReview checks whether or the current user can perform an action.  Not filling in a spec.namespace means "in all namespaces".  Self is a special case, because users should always be able to check whether they can perform an action
 *
 * @schema io.k8s.api.authorization.v1beta1.SelfSubjectAccessReview
 */
class KubeSelfSubjectAccessReviewV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.authorization.v1beta1.SelfSubjectAccessReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeSelfSubjectAccessReviewV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1beta1.SelfSubjectAccessReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeSelfSubjectAccessReviewV1Beta1.GVK), toJson_KubeSelfSubjectAccessReviewV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeSelfSubjectAccessReviewV1Beta1.GVK), toJson_KubeSelfSubjectAccessReviewV1Beta1Props(resolved));
    }
}
exports.KubeSelfSubjectAccessReviewV1Beta1 = KubeSelfSubjectAccessReviewV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.authorization.v1beta1.SelfSubjectAccessReview"
 */
KubeSelfSubjectAccessReviewV1Beta1.GVK = {
    apiVersion: 'authorization.k8s.io/v1beta1',
    kind: 'SelfSubjectAccessReview',
};
/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 *
 * @schema io.k8s.api.authorization.v1beta1.SelfSubjectRulesReview
 */
class KubeSelfSubjectRulesReviewV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.authorization.v1beta1.SelfSubjectRulesReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeSelfSubjectRulesReviewV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1beta1.SelfSubjectRulesReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeSelfSubjectRulesReviewV1Beta1.GVK), toJson_KubeSelfSubjectRulesReviewV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeSelfSubjectRulesReviewV1Beta1.GVK), toJson_KubeSelfSubjectRulesReviewV1Beta1Props(resolved));
    }
}
exports.KubeSelfSubjectRulesReviewV1Beta1 = KubeSelfSubjectRulesReviewV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.authorization.v1beta1.SelfSubjectRulesReview"
 */
KubeSelfSubjectRulesReviewV1Beta1.GVK = {
    apiVersion: 'authorization.k8s.io/v1beta1',
    kind: 'SelfSubjectRulesReview',
};
/**
 * SubjectAccessReview checks whether or not a user or group can perform an action.
 *
 * @schema io.k8s.api.authorization.v1beta1.SubjectAccessReview
 */
class KubeSubjectAccessReviewV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.authorization.v1beta1.SubjectAccessReview" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeSubjectAccessReviewV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.authorization.v1beta1.SubjectAccessReview".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeSubjectAccessReviewV1Beta1.GVK), toJson_KubeSubjectAccessReviewV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeSubjectAccessReviewV1Beta1.GVK), toJson_KubeSubjectAccessReviewV1Beta1Props(resolved));
    }
}
exports.KubeSubjectAccessReviewV1Beta1 = KubeSubjectAccessReviewV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.authorization.v1beta1.SubjectAccessReview"
 */
KubeSubjectAccessReviewV1Beta1.GVK = {
    apiVersion: 'authorization.k8s.io/v1beta1',
    kind: 'SubjectAccessReview',
};
/**
 * configuration of a horizontal pod autoscaler.
 *
 * @schema io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler
 */
class KubeHorizontalPodAutoscaler extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeHorizontalPodAutoscaler.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeHorizontalPodAutoscaler.GVK), toJson_KubeHorizontalPodAutoscalerProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeHorizontalPodAutoscaler.GVK), toJson_KubeHorizontalPodAutoscalerProps(resolved));
    }
}
exports.KubeHorizontalPodAutoscaler = KubeHorizontalPodAutoscaler;
/**
 * Returns the apiVersion and kind for "io.k8s.api.autoscaling.v1.HorizontalPodAutoscaler"
 */
KubeHorizontalPodAutoscaler.GVK = {
    apiVersion: 'autoscaling/v1',
    kind: 'HorizontalPodAutoscaler',
};
/**
 * list of horizontal pod autoscaler objects.
 *
 * @schema io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerList
 */
class KubeHorizontalPodAutoscalerList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeHorizontalPodAutoscalerList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeHorizontalPodAutoscalerList.GVK), toJson_KubeHorizontalPodAutoscalerListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeHorizontalPodAutoscalerList.GVK), toJson_KubeHorizontalPodAutoscalerListProps(resolved));
    }
}
exports.KubeHorizontalPodAutoscalerList = KubeHorizontalPodAutoscalerList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.autoscaling.v1.HorizontalPodAutoscalerList"
 */
KubeHorizontalPodAutoscalerList.GVK = {
    apiVersion: 'autoscaling/v1',
    kind: 'HorizontalPodAutoscalerList',
};
/**
 * Scale represents a scaling request for a resource.
 *
 * @schema io.k8s.api.autoscaling.v1.Scale
 */
class KubeScale extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.autoscaling.v1.Scale" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeScale.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.autoscaling.v1.Scale".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeScale.GVK), toJson_KubeScaleProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeScale.GVK), toJson_KubeScaleProps(resolved));
    }
}
exports.KubeScale = KubeScale;
/**
 * Returns the apiVersion and kind for "io.k8s.api.autoscaling.v1.Scale"
 */
KubeScale.GVK = {
    apiVersion: 'autoscaling/v1',
    kind: 'Scale',
};
/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 *
 * @schema io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscaler
 */
class KubeHorizontalPodAutoscalerV2Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscaler" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeHorizontalPodAutoscalerV2Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscaler".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeHorizontalPodAutoscalerV2Beta1.GVK), toJson_KubeHorizontalPodAutoscalerV2Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeHorizontalPodAutoscalerV2Beta1.GVK), toJson_KubeHorizontalPodAutoscalerV2Beta1Props(resolved));
    }
}
exports.KubeHorizontalPodAutoscalerV2Beta1 = KubeHorizontalPodAutoscalerV2Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscaler"
 */
KubeHorizontalPodAutoscalerV2Beta1.GVK = {
    apiVersion: 'autoscaling/v2beta1',
    kind: 'HorizontalPodAutoscaler',
};
/**
 * HorizontalPodAutoscaler is a list of horizontal pod autoscaler objects.
 *
 * @schema io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerList
 */
class KubeHorizontalPodAutoscalerListV2Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeHorizontalPodAutoscalerListV2Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeHorizontalPodAutoscalerListV2Beta1.GVK), toJson_KubeHorizontalPodAutoscalerListV2Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeHorizontalPodAutoscalerListV2Beta1.GVK), toJson_KubeHorizontalPodAutoscalerListV2Beta1Props(resolved));
    }
}
exports.KubeHorizontalPodAutoscalerListV2Beta1 = KubeHorizontalPodAutoscalerListV2Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.autoscaling.v2beta1.HorizontalPodAutoscalerList"
 */
KubeHorizontalPodAutoscalerListV2Beta1.GVK = {
    apiVersion: 'autoscaling/v2beta1',
    kind: 'HorizontalPodAutoscalerList',
};
/**
 * HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.
 *
 * @schema io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscaler
 */
class KubeHorizontalPodAutoscalerV2Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscaler" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeHorizontalPodAutoscalerV2Beta2.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscaler".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeHorizontalPodAutoscalerV2Beta2.GVK), toJson_KubeHorizontalPodAutoscalerV2Beta2Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeHorizontalPodAutoscalerV2Beta2.GVK), toJson_KubeHorizontalPodAutoscalerV2Beta2Props(resolved));
    }
}
exports.KubeHorizontalPodAutoscalerV2Beta2 = KubeHorizontalPodAutoscalerV2Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscaler"
 */
KubeHorizontalPodAutoscalerV2Beta2.GVK = {
    apiVersion: 'autoscaling/v2beta2',
    kind: 'HorizontalPodAutoscaler',
};
/**
 * HorizontalPodAutoscalerList is a list of horizontal pod autoscaler objects.
 *
 * @schema io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerList
 */
class KubeHorizontalPodAutoscalerListV2Beta2 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeHorizontalPodAutoscalerListV2Beta2.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeHorizontalPodAutoscalerListV2Beta2.GVK), toJson_KubeHorizontalPodAutoscalerListV2Beta2Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeHorizontalPodAutoscalerListV2Beta2.GVK), toJson_KubeHorizontalPodAutoscalerListV2Beta2Props(resolved));
    }
}
exports.KubeHorizontalPodAutoscalerListV2Beta2 = KubeHorizontalPodAutoscalerListV2Beta2;
/**
 * Returns the apiVersion and kind for "io.k8s.api.autoscaling.v2beta2.HorizontalPodAutoscalerList"
 */
KubeHorizontalPodAutoscalerListV2Beta2.GVK = {
    apiVersion: 'autoscaling/v2beta2',
    kind: 'HorizontalPodAutoscalerList',
};
/**
 * Job represents the configuration of a single job.
 *
 * @schema io.k8s.api.batch.v1.Job
 */
class KubeJob extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.batch.v1.Job" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeJob.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.batch.v1.Job".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeJob.GVK), toJson_KubeJobProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeJob.GVK), toJson_KubeJobProps(resolved));
    }
}
exports.KubeJob = KubeJob;
/**
 * Returns the apiVersion and kind for "io.k8s.api.batch.v1.Job"
 */
KubeJob.GVK = {
    apiVersion: 'batch/v1',
    kind: 'Job',
};
/**
 * JobList is a collection of jobs.
 *
 * @schema io.k8s.api.batch.v1.JobList
 */
class KubeJobList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.batch.v1.JobList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeJobList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.batch.v1.JobList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeJobList.GVK), toJson_KubeJobListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeJobList.GVK), toJson_KubeJobListProps(resolved));
    }
}
exports.KubeJobList = KubeJobList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.batch.v1.JobList"
 */
KubeJobList.GVK = {
    apiVersion: 'batch/v1',
    kind: 'JobList',
};
/**
 * CronJob represents the configuration of a single cron job.
 *
 * @schema io.k8s.api.batch.v1beta1.CronJob
 */
class KubeCronJobV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.batch.v1beta1.CronJob" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeCronJobV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.batch.v1beta1.CronJob".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeCronJobV1Beta1.GVK), toJson_KubeCronJobV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeCronJobV1Beta1.GVK), toJson_KubeCronJobV1Beta1Props(resolved));
    }
}
exports.KubeCronJobV1Beta1 = KubeCronJobV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.batch.v1beta1.CronJob"
 */
KubeCronJobV1Beta1.GVK = {
    apiVersion: 'batch/v1beta1',
    kind: 'CronJob',
};
/**
 * CronJobList is a collection of cron jobs.
 *
 * @schema io.k8s.api.batch.v1beta1.CronJobList
 */
class KubeCronJobListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.batch.v1beta1.CronJobList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeCronJobListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.batch.v1beta1.CronJobList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeCronJobListV1Beta1.GVK), toJson_KubeCronJobListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeCronJobListV1Beta1.GVK), toJson_KubeCronJobListV1Beta1Props(resolved));
    }
}
exports.KubeCronJobListV1Beta1 = KubeCronJobListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.batch.v1beta1.CronJobList"
 */
KubeCronJobListV1Beta1.GVK = {
    apiVersion: 'batch/v1beta1',
    kind: 'CronJobList',
};
/**
 * CronJob represents the configuration of a single cron job.
 *
 * @schema io.k8s.api.batch.v2alpha1.CronJob
 */
class KubeCronJobV2Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.batch.v2alpha1.CronJob" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeCronJobV2Alpha1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.batch.v2alpha1.CronJob".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeCronJobV2Alpha1.GVK), toJson_KubeCronJobV2Alpha1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeCronJobV2Alpha1.GVK), toJson_KubeCronJobV2Alpha1Props(resolved));
    }
}
exports.KubeCronJobV2Alpha1 = KubeCronJobV2Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.batch.v2alpha1.CronJob"
 */
KubeCronJobV2Alpha1.GVK = {
    apiVersion: 'batch/v2alpha1',
    kind: 'CronJob',
};
/**
 * CronJobList is a collection of cron jobs.
 *
 * @schema io.k8s.api.batch.v2alpha1.CronJobList
 */
class KubeCronJobListV2Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.batch.v2alpha1.CronJobList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeCronJobListV2Alpha1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.batch.v2alpha1.CronJobList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeCronJobListV2Alpha1.GVK), toJson_KubeCronJobListV2Alpha1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeCronJobListV2Alpha1.GVK), toJson_KubeCronJobListV2Alpha1Props(resolved));
    }
}
exports.KubeCronJobListV2Alpha1 = KubeCronJobListV2Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.batch.v2alpha1.CronJobList"
 */
KubeCronJobListV2Alpha1.GVK = {
    apiVersion: 'batch/v2alpha1',
    kind: 'CronJobList',
};
/**
 * Describes a certificate signing request
 *
 * @schema io.k8s.api.certificates.v1beta1.CertificateSigningRequest
 */
class KubeCertificateSigningRequestV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.certificates.v1beta1.CertificateSigningRequest" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeCertificateSigningRequestV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.certificates.v1beta1.CertificateSigningRequest".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeCertificateSigningRequestV1Beta1.GVK), toJson_KubeCertificateSigningRequestV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeCertificateSigningRequestV1Beta1.GVK), toJson_KubeCertificateSigningRequestV1Beta1Props(resolved));
    }
}
exports.KubeCertificateSigningRequestV1Beta1 = KubeCertificateSigningRequestV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.certificates.v1beta1.CertificateSigningRequest"
 */
KubeCertificateSigningRequestV1Beta1.GVK = {
    apiVersion: 'certificates.k8s.io/v1beta1',
    kind: 'CertificateSigningRequest',
};
/**
 *
 *
 * @schema io.k8s.api.certificates.v1beta1.CertificateSigningRequestList
 */
class KubeCertificateSigningRequestListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.certificates.v1beta1.CertificateSigningRequestList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeCertificateSigningRequestListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.certificates.v1beta1.CertificateSigningRequestList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeCertificateSigningRequestListV1Beta1.GVK), toJson_KubeCertificateSigningRequestListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeCertificateSigningRequestListV1Beta1.GVK), toJson_KubeCertificateSigningRequestListV1Beta1Props(resolved));
    }
}
exports.KubeCertificateSigningRequestListV1Beta1 = KubeCertificateSigningRequestListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.certificates.v1beta1.CertificateSigningRequestList"
 */
KubeCertificateSigningRequestListV1Beta1.GVK = {
    apiVersion: 'certificates.k8s.io/v1beta1',
    kind: 'CertificateSigningRequestList',
};
/**
 * Lease defines a lease concept.
 *
 * @schema io.k8s.api.coordination.v1.Lease
 */
class KubeLease extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.coordination.v1.Lease" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeLease.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.coordination.v1.Lease".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeLease.GVK), toJson_KubeLeaseProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeLease.GVK), toJson_KubeLeaseProps(resolved));
    }
}
exports.KubeLease = KubeLease;
/**
 * Returns the apiVersion and kind for "io.k8s.api.coordination.v1.Lease"
 */
KubeLease.GVK = {
    apiVersion: 'coordination.k8s.io/v1',
    kind: 'Lease',
};
/**
 * LeaseList is a list of Lease objects.
 *
 * @schema io.k8s.api.coordination.v1.LeaseList
 */
class KubeLeaseList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.coordination.v1.LeaseList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeLeaseList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.coordination.v1.LeaseList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeLeaseList.GVK), toJson_KubeLeaseListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeLeaseList.GVK), toJson_KubeLeaseListProps(resolved));
    }
}
exports.KubeLeaseList = KubeLeaseList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.coordination.v1.LeaseList"
 */
KubeLeaseList.GVK = {
    apiVersion: 'coordination.k8s.io/v1',
    kind: 'LeaseList',
};
/**
 * Lease defines a lease concept.
 *
 * @schema io.k8s.api.coordination.v1beta1.Lease
 */
class KubeLeaseV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.coordination.v1beta1.Lease" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeLeaseV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.coordination.v1beta1.Lease".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeLeaseV1Beta1.GVK), toJson_KubeLeaseV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeLeaseV1Beta1.GVK), toJson_KubeLeaseV1Beta1Props(resolved));
    }
}
exports.KubeLeaseV1Beta1 = KubeLeaseV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.coordination.v1beta1.Lease"
 */
KubeLeaseV1Beta1.GVK = {
    apiVersion: 'coordination.k8s.io/v1beta1',
    kind: 'Lease',
};
/**
 * LeaseList is a list of Lease objects.
 *
 * @schema io.k8s.api.coordination.v1beta1.LeaseList
 */
class KubeLeaseListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.coordination.v1beta1.LeaseList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeLeaseListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.coordination.v1beta1.LeaseList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeLeaseListV1Beta1.GVK), toJson_KubeLeaseListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeLeaseListV1Beta1.GVK), toJson_KubeLeaseListV1Beta1Props(resolved));
    }
}
exports.KubeLeaseListV1Beta1 = KubeLeaseListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.coordination.v1beta1.LeaseList"
 */
KubeLeaseListV1Beta1.GVK = {
    apiVersion: 'coordination.k8s.io/v1beta1',
    kind: 'LeaseList',
};
/**
 * Binding ties one object to another; for example, a pod is bound to a node by a scheduler. Deprecated in 1.7, please use the bindings subresource of pods instead.
 *
 * @schema io.k8s.api.core.v1.Binding
 */
class KubeBinding extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.Binding" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeBinding.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Binding".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeBinding.GVK), toJson_KubeBindingProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeBinding.GVK), toJson_KubeBindingProps(resolved));
    }
}
exports.KubeBinding = KubeBinding;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.Binding"
 */
KubeBinding.GVK = {
    apiVersion: 'v1',
    kind: 'Binding',
};
/**
 * ComponentStatus (and ComponentStatusList) holds the cluster validation info.
 *
 * @schema io.k8s.api.core.v1.ComponentStatus
 */
class KubeComponentStatus extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.ComponentStatus" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeComponentStatus.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ComponentStatus".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeComponentStatus.GVK), toJson_KubeComponentStatusProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeComponentStatus.GVK), toJson_KubeComponentStatusProps(resolved));
    }
}
exports.KubeComponentStatus = KubeComponentStatus;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.ComponentStatus"
 */
KubeComponentStatus.GVK = {
    apiVersion: 'v1',
    kind: 'ComponentStatus',
};
/**
 * Status of all the conditions for the component as a list of ComponentStatus objects.
 *
 * @schema io.k8s.api.core.v1.ComponentStatusList
 */
class KubeComponentStatusList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.ComponentStatusList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeComponentStatusList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ComponentStatusList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeComponentStatusList.GVK), toJson_KubeComponentStatusListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeComponentStatusList.GVK), toJson_KubeComponentStatusListProps(resolved));
    }
}
exports.KubeComponentStatusList = KubeComponentStatusList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.ComponentStatusList"
 */
KubeComponentStatusList.GVK = {
    apiVersion: 'v1',
    kind: 'ComponentStatusList',
};
/**
 * ConfigMap holds configuration data for pods to consume.
 *
 * @schema io.k8s.api.core.v1.ConfigMap
 */
class KubeConfigMap extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.ConfigMap" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeConfigMap.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ConfigMap".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeConfigMap.GVK), toJson_KubeConfigMapProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeConfigMap.GVK), toJson_KubeConfigMapProps(resolved));
    }
}
exports.KubeConfigMap = KubeConfigMap;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.ConfigMap"
 */
KubeConfigMap.GVK = {
    apiVersion: 'v1',
    kind: 'ConfigMap',
};
/**
 * ConfigMapList is a resource containing a list of ConfigMap objects.
 *
 * @schema io.k8s.api.core.v1.ConfigMapList
 */
class KubeConfigMapList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.ConfigMapList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeConfigMapList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ConfigMapList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeConfigMapList.GVK), toJson_KubeConfigMapListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeConfigMapList.GVK), toJson_KubeConfigMapListProps(resolved));
    }
}
exports.KubeConfigMapList = KubeConfigMapList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.ConfigMapList"
 */
KubeConfigMapList.GVK = {
    apiVersion: 'v1',
    kind: 'ConfigMapList',
};
/**
 * Endpoints is a collection of endpoints that implement the actual service. Example:
  Name: "mysvc",
  Subsets: [
    {
      Addresses: [{"ip": "10.10.1.1"}, {"ip": "10.10.2.2"}],
      Ports: [{"name": "a", "port": 8675}, {"name": "b", "port": 309}]
    },
    {
      Addresses: [{"ip": "10.10.3.3"}],
      Ports: [{"name": "a", "port": 93}, {"name": "b", "port": 76}]
    },
 ]
 *
 * @schema io.k8s.api.core.v1.Endpoints
 */
class KubeEndpoints extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.Endpoints" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeEndpoints.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Endpoints".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeEndpoints.GVK), toJson_KubeEndpointsProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeEndpoints.GVK), toJson_KubeEndpointsProps(resolved));
    }
}
exports.KubeEndpoints = KubeEndpoints;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.Endpoints"
 */
KubeEndpoints.GVK = {
    apiVersion: 'v1',
    kind: 'Endpoints',
};
/**
 * EndpointsList is a list of endpoints.
 *
 * @schema io.k8s.api.core.v1.EndpointsList
 */
class KubeEndpointsList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.EndpointsList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeEndpointsList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.EndpointsList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeEndpointsList.GVK), toJson_KubeEndpointsListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeEndpointsList.GVK), toJson_KubeEndpointsListProps(resolved));
    }
}
exports.KubeEndpointsList = KubeEndpointsList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.EndpointsList"
 */
KubeEndpointsList.GVK = {
    apiVersion: 'v1',
    kind: 'EndpointsList',
};
/**
 * Event is a report of an event somewhere in the cluster.
 *
 * @schema io.k8s.api.core.v1.Event
 */
class KubeEvent extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.Event" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeEvent.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Event".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeEvent.GVK), toJson_KubeEventProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeEvent.GVK), toJson_KubeEventProps(resolved));
    }
}
exports.KubeEvent = KubeEvent;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.Event"
 */
KubeEvent.GVK = {
    apiVersion: 'v1',
    kind: 'Event',
};
/**
 * EventList is a list of events.
 *
 * @schema io.k8s.api.core.v1.EventList
 */
class KubeEventList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.EventList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeEventList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.EventList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeEventList.GVK), toJson_KubeEventListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeEventList.GVK), toJson_KubeEventListProps(resolved));
    }
}
exports.KubeEventList = KubeEventList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.EventList"
 */
KubeEventList.GVK = {
    apiVersion: 'v1',
    kind: 'EventList',
};
/**
 * LimitRange sets resource usage limits for each kind of resource in a Namespace.
 *
 * @schema io.k8s.api.core.v1.LimitRange
 */
class KubeLimitRange extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.LimitRange" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeLimitRange.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.LimitRange".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeLimitRange.GVK), toJson_KubeLimitRangeProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeLimitRange.GVK), toJson_KubeLimitRangeProps(resolved));
    }
}
exports.KubeLimitRange = KubeLimitRange;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.LimitRange"
 */
KubeLimitRange.GVK = {
    apiVersion: 'v1',
    kind: 'LimitRange',
};
/**
 * LimitRangeList is a list of LimitRange items.
 *
 * @schema io.k8s.api.core.v1.LimitRangeList
 */
class KubeLimitRangeList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.LimitRangeList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeLimitRangeList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.LimitRangeList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeLimitRangeList.GVK), toJson_KubeLimitRangeListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeLimitRangeList.GVK), toJson_KubeLimitRangeListProps(resolved));
    }
}
exports.KubeLimitRangeList = KubeLimitRangeList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.LimitRangeList"
 */
KubeLimitRangeList.GVK = {
    apiVersion: 'v1',
    kind: 'LimitRangeList',
};
/**
 * Namespace provides a scope for Names. Use of multiple namespaces is optional.
 *
 * @schema io.k8s.api.core.v1.Namespace
 */
class KubeNamespace extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.Namespace" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeNamespace.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Namespace".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeNamespace.GVK), toJson_KubeNamespaceProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeNamespace.GVK), toJson_KubeNamespaceProps(resolved));
    }
}
exports.KubeNamespace = KubeNamespace;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.Namespace"
 */
KubeNamespace.GVK = {
    apiVersion: 'v1',
    kind: 'Namespace',
};
/**
 * NamespaceList is a list of Namespaces.
 *
 * @schema io.k8s.api.core.v1.NamespaceList
 */
class KubeNamespaceList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.NamespaceList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeNamespaceList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.NamespaceList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeNamespaceList.GVK), toJson_KubeNamespaceListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeNamespaceList.GVK), toJson_KubeNamespaceListProps(resolved));
    }
}
exports.KubeNamespaceList = KubeNamespaceList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.NamespaceList"
 */
KubeNamespaceList.GVK = {
    apiVersion: 'v1',
    kind: 'NamespaceList',
};
/**
 * Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
 *
 * @schema io.k8s.api.core.v1.Node
 */
class KubeNode extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.Node" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeNode.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Node".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeNode.GVK), toJson_KubeNodeProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeNode.GVK), toJson_KubeNodeProps(resolved));
    }
}
exports.KubeNode = KubeNode;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.Node"
 */
KubeNode.GVK = {
    apiVersion: 'v1',
    kind: 'Node',
};
/**
 * NodeList is the whole list of all Nodes which have been registered with master.
 *
 * @schema io.k8s.api.core.v1.NodeList
 */
class KubeNodeList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.NodeList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeNodeList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.NodeList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeNodeList.GVK), toJson_KubeNodeListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeNodeList.GVK), toJson_KubeNodeListProps(resolved));
    }
}
exports.KubeNodeList = KubeNodeList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.NodeList"
 */
KubeNodeList.GVK = {
    apiVersion: 'v1',
    kind: 'NodeList',
};
/**
 * PersistentVolume (PV) is a storage resource provisioned by an administrator. It is analogous to a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes
 *
 * @schema io.k8s.api.core.v1.PersistentVolume
 */
class KubePersistentVolume extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.PersistentVolume" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubePersistentVolume.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.PersistentVolume".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubePersistentVolume.GVK), toJson_KubePersistentVolumeProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubePersistentVolume.GVK), toJson_KubePersistentVolumeProps(resolved));
    }
}
exports.KubePersistentVolume = KubePersistentVolume;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.PersistentVolume"
 */
KubePersistentVolume.GVK = {
    apiVersion: 'v1',
    kind: 'PersistentVolume',
};
/**
 * PersistentVolumeClaim is a user's request for and claim to a persistent volume
 *
 * @schema io.k8s.api.core.v1.PersistentVolumeClaim
 */
class KubePersistentVolumeClaim extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.PersistentVolumeClaim" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubePersistentVolumeClaim.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.PersistentVolumeClaim".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubePersistentVolumeClaim.GVK), toJson_KubePersistentVolumeClaimProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubePersistentVolumeClaim.GVK), toJson_KubePersistentVolumeClaimProps(resolved));
    }
}
exports.KubePersistentVolumeClaim = KubePersistentVolumeClaim;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.PersistentVolumeClaim"
 */
KubePersistentVolumeClaim.GVK = {
    apiVersion: 'v1',
    kind: 'PersistentVolumeClaim',
};
/**
 * PersistentVolumeClaimList is a list of PersistentVolumeClaim items.
 *
 * @schema io.k8s.api.core.v1.PersistentVolumeClaimList
 */
class KubePersistentVolumeClaimList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.PersistentVolumeClaimList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubePersistentVolumeClaimList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.PersistentVolumeClaimList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePersistentVolumeClaimList.GVK), toJson_KubePersistentVolumeClaimListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubePersistentVolumeClaimList.GVK), toJson_KubePersistentVolumeClaimListProps(resolved));
    }
}
exports.KubePersistentVolumeClaimList = KubePersistentVolumeClaimList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.PersistentVolumeClaimList"
 */
KubePersistentVolumeClaimList.GVK = {
    apiVersion: 'v1',
    kind: 'PersistentVolumeClaimList',
};
/**
 * PersistentVolumeList is a list of PersistentVolume items.
 *
 * @schema io.k8s.api.core.v1.PersistentVolumeList
 */
class KubePersistentVolumeList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.PersistentVolumeList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubePersistentVolumeList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.PersistentVolumeList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePersistentVolumeList.GVK), toJson_KubePersistentVolumeListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubePersistentVolumeList.GVK), toJson_KubePersistentVolumeListProps(resolved));
    }
}
exports.KubePersistentVolumeList = KubePersistentVolumeList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.PersistentVolumeList"
 */
KubePersistentVolumeList.GVK = {
    apiVersion: 'v1',
    kind: 'PersistentVolumeList',
};
/**
 * Pod is a collection of containers that can run on a host. This resource is created by clients and scheduled onto hosts.
 *
 * @schema io.k8s.api.core.v1.Pod
 */
class KubePod extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.Pod" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubePod.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Pod".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubePod.GVK), toJson_KubePodProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubePod.GVK), toJson_KubePodProps(resolved));
    }
}
exports.KubePod = KubePod;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.Pod"
 */
KubePod.GVK = {
    apiVersion: 'v1',
    kind: 'Pod',
};
/**
 * PodList is a list of Pods.
 *
 * @schema io.k8s.api.core.v1.PodList
 */
class KubePodList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.PodList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubePodList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.PodList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePodList.GVK), toJson_KubePodListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubePodList.GVK), toJson_KubePodListProps(resolved));
    }
}
exports.KubePodList = KubePodList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.PodList"
 */
KubePodList.GVK = {
    apiVersion: 'v1',
    kind: 'PodList',
};
/**
 * PodTemplate describes a template for creating copies of a predefined pod.
 *
 * @schema io.k8s.api.core.v1.PodTemplate
 */
class KubePodTemplate extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.PodTemplate" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubePodTemplate.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.PodTemplate".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubePodTemplate.GVK), toJson_KubePodTemplateProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubePodTemplate.GVK), toJson_KubePodTemplateProps(resolved));
    }
}
exports.KubePodTemplate = KubePodTemplate;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.PodTemplate"
 */
KubePodTemplate.GVK = {
    apiVersion: 'v1',
    kind: 'PodTemplate',
};
/**
 * PodTemplateList is a list of PodTemplates.
 *
 * @schema io.k8s.api.core.v1.PodTemplateList
 */
class KubePodTemplateList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.PodTemplateList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubePodTemplateList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.PodTemplateList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePodTemplateList.GVK), toJson_KubePodTemplateListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubePodTemplateList.GVK), toJson_KubePodTemplateListProps(resolved));
    }
}
exports.KubePodTemplateList = KubePodTemplateList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.PodTemplateList"
 */
KubePodTemplateList.GVK = {
    apiVersion: 'v1',
    kind: 'PodTemplateList',
};
/**
 * ReplicationController represents the configuration of a replication controller.
 *
 * @schema io.k8s.api.core.v1.ReplicationController
 */
class KubeReplicationController extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.ReplicationController" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeReplicationController.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ReplicationController".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeReplicationController.GVK), toJson_KubeReplicationControllerProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeReplicationController.GVK), toJson_KubeReplicationControllerProps(resolved));
    }
}
exports.KubeReplicationController = KubeReplicationController;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.ReplicationController"
 */
KubeReplicationController.GVK = {
    apiVersion: 'v1',
    kind: 'ReplicationController',
};
/**
 * ReplicationControllerList is a collection of replication controllers.
 *
 * @schema io.k8s.api.core.v1.ReplicationControllerList
 */
class KubeReplicationControllerList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.ReplicationControllerList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeReplicationControllerList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ReplicationControllerList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeReplicationControllerList.GVK), toJson_KubeReplicationControllerListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeReplicationControllerList.GVK), toJson_KubeReplicationControllerListProps(resolved));
    }
}
exports.KubeReplicationControllerList = KubeReplicationControllerList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.ReplicationControllerList"
 */
KubeReplicationControllerList.GVK = {
    apiVersion: 'v1',
    kind: 'ReplicationControllerList',
};
/**
 * ResourceQuota sets aggregate quota restrictions enforced per namespace
 *
 * @schema io.k8s.api.core.v1.ResourceQuota
 */
class KubeResourceQuota extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.ResourceQuota" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeResourceQuota.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ResourceQuota".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeResourceQuota.GVK), toJson_KubeResourceQuotaProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeResourceQuota.GVK), toJson_KubeResourceQuotaProps(resolved));
    }
}
exports.KubeResourceQuota = KubeResourceQuota;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.ResourceQuota"
 */
KubeResourceQuota.GVK = {
    apiVersion: 'v1',
    kind: 'ResourceQuota',
};
/**
 * ResourceQuotaList is a list of ResourceQuota items.
 *
 * @schema io.k8s.api.core.v1.ResourceQuotaList
 */
class KubeResourceQuotaList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.ResourceQuotaList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeResourceQuotaList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ResourceQuotaList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeResourceQuotaList.GVK), toJson_KubeResourceQuotaListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeResourceQuotaList.GVK), toJson_KubeResourceQuotaListProps(resolved));
    }
}
exports.KubeResourceQuotaList = KubeResourceQuotaList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.ResourceQuotaList"
 */
KubeResourceQuotaList.GVK = {
    apiVersion: 'v1',
    kind: 'ResourceQuotaList',
};
/**
 * Secret holds secret data of a certain type. The total bytes of the values in the Data field must be less than MaxSecretSize bytes.
 *
 * @schema io.k8s.api.core.v1.Secret
 */
class KubeSecret extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.Secret" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeSecret.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Secret".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeSecret.GVK), toJson_KubeSecretProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeSecret.GVK), toJson_KubeSecretProps(resolved));
    }
}
exports.KubeSecret = KubeSecret;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.Secret"
 */
KubeSecret.GVK = {
    apiVersion: 'v1',
    kind: 'Secret',
};
/**
 * SecretList is a list of Secret.
 *
 * @schema io.k8s.api.core.v1.SecretList
 */
class KubeSecretList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.SecretList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeSecretList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.SecretList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeSecretList.GVK), toJson_KubeSecretListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeSecretList.GVK), toJson_KubeSecretListProps(resolved));
    }
}
exports.KubeSecretList = KubeSecretList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.SecretList"
 */
KubeSecretList.GVK = {
    apiVersion: 'v1',
    kind: 'SecretList',
};
/**
 * Service is a named abstraction of software service (for example, mysql) consisting of local port (for example 3306) that the proxy listens on, and the selector that determines which pods will answer requests sent through the proxy.
 *
 * @schema io.k8s.api.core.v1.Service
 */
class KubeService extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.Service" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeService.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.Service".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeService.GVK), toJson_KubeServiceProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeService.GVK), toJson_KubeServiceProps(resolved));
    }
}
exports.KubeService = KubeService;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.Service"
 */
KubeService.GVK = {
    apiVersion: 'v1',
    kind: 'Service',
};
/**
 * ServiceAccount binds together: * a name, understood by users, and perhaps by peripheral systems, for an identity * a principal that can be authenticated and authorized * a set of secrets
 *
 * @schema io.k8s.api.core.v1.ServiceAccount
 */
class KubeServiceAccount extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.ServiceAccount" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeServiceAccount.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ServiceAccount".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeServiceAccount.GVK), toJson_KubeServiceAccountProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeServiceAccount.GVK), toJson_KubeServiceAccountProps(resolved));
    }
}
exports.KubeServiceAccount = KubeServiceAccount;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.ServiceAccount"
 */
KubeServiceAccount.GVK = {
    apiVersion: 'v1',
    kind: 'ServiceAccount',
};
/**
 * ServiceAccountList is a list of ServiceAccount objects
 *
 * @schema io.k8s.api.core.v1.ServiceAccountList
 */
class KubeServiceAccountList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.ServiceAccountList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeServiceAccountList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ServiceAccountList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeServiceAccountList.GVK), toJson_KubeServiceAccountListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeServiceAccountList.GVK), toJson_KubeServiceAccountListProps(resolved));
    }
}
exports.KubeServiceAccountList = KubeServiceAccountList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.ServiceAccountList"
 */
KubeServiceAccountList.GVK = {
    apiVersion: 'v1',
    kind: 'ServiceAccountList',
};
/**
 * ServiceList holds a list of services.
 *
 * @schema io.k8s.api.core.v1.ServiceList
 */
class KubeServiceList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.core.v1.ServiceList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeServiceList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.core.v1.ServiceList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeServiceList.GVK), toJson_KubeServiceListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeServiceList.GVK), toJson_KubeServiceListProps(resolved));
    }
}
exports.KubeServiceList = KubeServiceList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.core.v1.ServiceList"
 */
KubeServiceList.GVK = {
    apiVersion: 'v1',
    kind: 'ServiceList',
};
/**
 * Event is a report of an event somewhere in the cluster. It generally denotes some state change in the system.
 *
 * @schema io.k8s.api.events.v1beta1.Event
 */
class KubeEventV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.events.v1beta1.Event" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeEventV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.events.v1beta1.Event".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeEventV1Beta1.GVK), toJson_KubeEventV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeEventV1Beta1.GVK), toJson_KubeEventV1Beta1Props(resolved));
    }
}
exports.KubeEventV1Beta1 = KubeEventV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.events.v1beta1.Event"
 */
KubeEventV1Beta1.GVK = {
    apiVersion: 'events.k8s.io/v1beta1',
    kind: 'Event',
};
/**
 * EventList is a list of Event objects.
 *
 * @schema io.k8s.api.events.v1beta1.EventList
 */
class KubeEventListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.events.v1beta1.EventList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeEventListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.events.v1beta1.EventList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeEventListV1Beta1.GVK), toJson_KubeEventListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeEventListV1Beta1.GVK), toJson_KubeEventListV1Beta1Props(resolved));
    }
}
exports.KubeEventListV1Beta1 = KubeEventListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.events.v1beta1.EventList"
 */
KubeEventListV1Beta1.GVK = {
    apiVersion: 'events.k8s.io/v1beta1',
    kind: 'EventList',
};
/**
 * DEPRECATED - This group version of DaemonSet is deprecated by apps/v1beta2/DaemonSet. See the release notes for more information. DaemonSet represents the configuration of a daemon set.
 *
 * @schema io.k8s.api.extensions.v1beta1.DaemonSet
 */
class KubeDaemonSetV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.DaemonSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeDaemonSetV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.DaemonSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeDaemonSetV1Beta1.GVK), toJson_KubeDaemonSetV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeDaemonSetV1Beta1.GVK), toJson_KubeDaemonSetV1Beta1Props(resolved));
    }
}
exports.KubeDaemonSetV1Beta1 = KubeDaemonSetV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.DaemonSet"
 */
KubeDaemonSetV1Beta1.GVK = {
    apiVersion: 'extensions/v1beta1',
    kind: 'DaemonSet',
};
/**
 * DaemonSetList is a collection of daemon sets.
 *
 * @schema io.k8s.api.extensions.v1beta1.DaemonSetList
 */
class KubeDaemonSetListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.DaemonSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeDaemonSetListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.DaemonSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeDaemonSetListV1Beta1.GVK), toJson_KubeDaemonSetListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeDaemonSetListV1Beta1.GVK), toJson_KubeDaemonSetListV1Beta1Props(resolved));
    }
}
exports.KubeDaemonSetListV1Beta1 = KubeDaemonSetListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.DaemonSetList"
 */
KubeDaemonSetListV1Beta1.GVK = {
    apiVersion: 'extensions/v1beta1',
    kind: 'DaemonSetList',
};
/**
 * Ingress is a collection of rules that allow inbound connections to reach the endpoints defined by a backend. An Ingress can be configured to give services externally-reachable urls, load balance traffic, terminate SSL, offer name based virtual hosting etc.
 *
 * @schema io.k8s.api.networking.v1beta1.Ingress
 */
class KubeIngressV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.networking.v1beta1.Ingress" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeIngressV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.networking.v1beta1.Ingress".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeIngressV1Beta1.GVK), toJson_KubeIngressV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeIngressV1Beta1.GVK), toJson_KubeIngressV1Beta1Props(resolved));
    }
}
exports.KubeIngressV1Beta1 = KubeIngressV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.networking.v1beta1.Ingress"
 */
KubeIngressV1Beta1.GVK = {
    apiVersion: 'networking.k8s.io/v1beta1',
    kind: 'Ingress',
};
/**
 * IngressList is a collection of Ingress.
 *
 * @schema io.k8s.api.networking.v1beta1.IngressList
 */
class KubeIngressListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.networking.v1beta1.IngressList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeIngressListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.networking.v1beta1.IngressList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeIngressListV1Beta1.GVK), toJson_KubeIngressListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeIngressListV1Beta1.GVK), toJson_KubeIngressListV1Beta1Props(resolved));
    }
}
exports.KubeIngressListV1Beta1 = KubeIngressListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.networking.v1beta1.IngressList"
 */
KubeIngressListV1Beta1.GVK = {
    apiVersion: 'networking.k8s.io/v1beta1',
    kind: 'IngressList',
};
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicy is deprecated by networking/v1/NetworkPolicy. NetworkPolicy describes what network traffic is allowed for a set of Pods
 *
 * @schema io.k8s.api.extensions.v1beta1.NetworkPolicy
 */
class KubeNetworkPolicyV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.NetworkPolicy" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeNetworkPolicyV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.NetworkPolicy".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeNetworkPolicyV1Beta1.GVK), toJson_KubeNetworkPolicyV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeNetworkPolicyV1Beta1.GVK), toJson_KubeNetworkPolicyV1Beta1Props(resolved));
    }
}
exports.KubeNetworkPolicyV1Beta1 = KubeNetworkPolicyV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.NetworkPolicy"
 */
KubeNetworkPolicyV1Beta1.GVK = {
    apiVersion: 'extensions/v1beta1',
    kind: 'NetworkPolicy',
};
/**
 * DEPRECATED 1.9 - This group version of NetworkPolicyList is deprecated by networking/v1/NetworkPolicyList. Network Policy List is a list of NetworkPolicy objects.
 *
 * @schema io.k8s.api.extensions.v1beta1.NetworkPolicyList
 */
class KubeNetworkPolicyListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.NetworkPolicyList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeNetworkPolicyListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.NetworkPolicyList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeNetworkPolicyListV1Beta1.GVK), toJson_KubeNetworkPolicyListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeNetworkPolicyListV1Beta1.GVK), toJson_KubeNetworkPolicyListV1Beta1Props(resolved));
    }
}
exports.KubeNetworkPolicyListV1Beta1 = KubeNetworkPolicyListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.NetworkPolicyList"
 */
KubeNetworkPolicyListV1Beta1.GVK = {
    apiVersion: 'extensions/v1beta1',
    kind: 'NetworkPolicyList',
};
/**
 * PodSecurityPolicy governs the ability to make requests that affect the Security Context that will be applied to a pod and container.
 *
 * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicy
 */
class KubePodSecurityPolicyV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.policy.v1beta1.PodSecurityPolicy" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubePodSecurityPolicyV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.policy.v1beta1.PodSecurityPolicy".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubePodSecurityPolicyV1Beta1.GVK), toJson_KubePodSecurityPolicyV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubePodSecurityPolicyV1Beta1.GVK), toJson_KubePodSecurityPolicyV1Beta1Props(resolved));
    }
}
exports.KubePodSecurityPolicyV1Beta1 = KubePodSecurityPolicyV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.policy.v1beta1.PodSecurityPolicy"
 */
KubePodSecurityPolicyV1Beta1.GVK = {
    apiVersion: 'policy/v1beta1',
    kind: 'PodSecurityPolicy',
};
/**
 * PodSecurityPolicyList is a list of PodSecurityPolicy objects.
 *
 * @schema io.k8s.api.policy.v1beta1.PodSecurityPolicyList
 */
class KubePodSecurityPolicyListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.policy.v1beta1.PodSecurityPolicyList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubePodSecurityPolicyListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.policy.v1beta1.PodSecurityPolicyList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePodSecurityPolicyListV1Beta1.GVK), toJson_KubePodSecurityPolicyListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubePodSecurityPolicyListV1Beta1.GVK), toJson_KubePodSecurityPolicyListV1Beta1Props(resolved));
    }
}
exports.KubePodSecurityPolicyListV1Beta1 = KubePodSecurityPolicyListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.policy.v1beta1.PodSecurityPolicyList"
 */
KubePodSecurityPolicyListV1Beta1.GVK = {
    apiVersion: 'policy/v1beta1',
    kind: 'PodSecurityPolicyList',
};
/**
 * DEPRECATED - This group version of ReplicaSet is deprecated by apps/v1beta2/ReplicaSet. See the release notes for more information. ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 *
 * @schema io.k8s.api.extensions.v1beta1.ReplicaSet
 */
class KubeReplicaSetV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.ReplicaSet" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeReplicaSetV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.ReplicaSet".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeReplicaSetV1Beta1.GVK), toJson_KubeReplicaSetV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeReplicaSetV1Beta1.GVK), toJson_KubeReplicaSetV1Beta1Props(resolved));
    }
}
exports.KubeReplicaSetV1Beta1 = KubeReplicaSetV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.ReplicaSet"
 */
KubeReplicaSetV1Beta1.GVK = {
    apiVersion: 'extensions/v1beta1',
    kind: 'ReplicaSet',
};
/**
 * ReplicaSetList is a collection of ReplicaSets.
 *
 * @schema io.k8s.api.extensions.v1beta1.ReplicaSetList
 */
class KubeReplicaSetListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.extensions.v1beta1.ReplicaSetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeReplicaSetListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.extensions.v1beta1.ReplicaSetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeReplicaSetListV1Beta1.GVK), toJson_KubeReplicaSetListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeReplicaSetListV1Beta1.GVK), toJson_KubeReplicaSetListV1Beta1Props(resolved));
    }
}
exports.KubeReplicaSetListV1Beta1 = KubeReplicaSetListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.extensions.v1beta1.ReplicaSetList"
 */
KubeReplicaSetListV1Beta1.GVK = {
    apiVersion: 'extensions/v1beta1',
    kind: 'ReplicaSetList',
};
/**
 * NetworkPolicy describes what network traffic is allowed for a set of Pods
 *
 * @schema io.k8s.api.networking.v1.NetworkPolicy
 */
class KubeNetworkPolicy extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.networking.v1.NetworkPolicy" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeNetworkPolicy.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.networking.v1.NetworkPolicy".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeNetworkPolicy.GVK), toJson_KubeNetworkPolicyProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeNetworkPolicy.GVK), toJson_KubeNetworkPolicyProps(resolved));
    }
}
exports.KubeNetworkPolicy = KubeNetworkPolicy;
/**
 * Returns the apiVersion and kind for "io.k8s.api.networking.v1.NetworkPolicy"
 */
KubeNetworkPolicy.GVK = {
    apiVersion: 'networking.k8s.io/v1',
    kind: 'NetworkPolicy',
};
/**
 * NetworkPolicyList is a list of NetworkPolicy objects.
 *
 * @schema io.k8s.api.networking.v1.NetworkPolicyList
 */
class KubeNetworkPolicyList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.networking.v1.NetworkPolicyList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeNetworkPolicyList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.networking.v1.NetworkPolicyList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeNetworkPolicyList.GVK), toJson_KubeNetworkPolicyListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeNetworkPolicyList.GVK), toJson_KubeNetworkPolicyListProps(resolved));
    }
}
exports.KubeNetworkPolicyList = KubeNetworkPolicyList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.networking.v1.NetworkPolicyList"
 */
KubeNetworkPolicyList.GVK = {
    apiVersion: 'networking.k8s.io/v1',
    kind: 'NetworkPolicyList',
};
/**
 * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md
 *
 * @schema io.k8s.api.node.v1alpha1.RuntimeClass
 */
class KubeRuntimeClassV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.node.v1alpha1.RuntimeClass" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeRuntimeClassV1Alpha1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.node.v1alpha1.RuntimeClass".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRuntimeClassV1Alpha1.GVK), toJson_KubeRuntimeClassV1Alpha1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeRuntimeClassV1Alpha1.GVK), toJson_KubeRuntimeClassV1Alpha1Props(resolved));
    }
}
exports.KubeRuntimeClassV1Alpha1 = KubeRuntimeClassV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.node.v1alpha1.RuntimeClass"
 */
KubeRuntimeClassV1Alpha1.GVK = {
    apiVersion: 'node.k8s.io/v1alpha1',
    kind: 'RuntimeClass',
};
/**
 * RuntimeClassList is a list of RuntimeClass objects.
 *
 * @schema io.k8s.api.node.v1alpha1.RuntimeClassList
 */
class KubeRuntimeClassListV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.node.v1alpha1.RuntimeClassList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeRuntimeClassListV1Alpha1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.node.v1alpha1.RuntimeClassList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRuntimeClassListV1Alpha1.GVK), toJson_KubeRuntimeClassListV1Alpha1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeRuntimeClassListV1Alpha1.GVK), toJson_KubeRuntimeClassListV1Alpha1Props(resolved));
    }
}
exports.KubeRuntimeClassListV1Alpha1 = KubeRuntimeClassListV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.node.v1alpha1.RuntimeClassList"
 */
KubeRuntimeClassListV1Alpha1.GVK = {
    apiVersion: 'node.k8s.io/v1alpha1',
    kind: 'RuntimeClassList',
};
/**
 * RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are (currently) manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://git.k8s.io/enhancements/keps/sig-node/runtime-class.md
 *
 * @schema io.k8s.api.node.v1beta1.RuntimeClass
 */
class KubeRuntimeClassV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.node.v1beta1.RuntimeClass" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeRuntimeClassV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.node.v1beta1.RuntimeClass".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRuntimeClassV1Beta1.GVK), toJson_KubeRuntimeClassV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeRuntimeClassV1Beta1.GVK), toJson_KubeRuntimeClassV1Beta1Props(resolved));
    }
}
exports.KubeRuntimeClassV1Beta1 = KubeRuntimeClassV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.node.v1beta1.RuntimeClass"
 */
KubeRuntimeClassV1Beta1.GVK = {
    apiVersion: 'node.k8s.io/v1beta1',
    kind: 'RuntimeClass',
};
/**
 * RuntimeClassList is a list of RuntimeClass objects.
 *
 * @schema io.k8s.api.node.v1beta1.RuntimeClassList
 */
class KubeRuntimeClassListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.node.v1beta1.RuntimeClassList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeRuntimeClassListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.node.v1beta1.RuntimeClassList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRuntimeClassListV1Beta1.GVK), toJson_KubeRuntimeClassListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeRuntimeClassListV1Beta1.GVK), toJson_KubeRuntimeClassListV1Beta1Props(resolved));
    }
}
exports.KubeRuntimeClassListV1Beta1 = KubeRuntimeClassListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.node.v1beta1.RuntimeClassList"
 */
KubeRuntimeClassListV1Beta1.GVK = {
    apiVersion: 'node.k8s.io/v1beta1',
    kind: 'RuntimeClassList',
};
/**
 * Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/<pod name>/evictions.
 *
 * @schema io.k8s.api.policy.v1beta1.Eviction
 */
class KubeEvictionV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.policy.v1beta1.Eviction" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeEvictionV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.policy.v1beta1.Eviction".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeEvictionV1Beta1.GVK), toJson_KubeEvictionV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeEvictionV1Beta1.GVK), toJson_KubeEvictionV1Beta1Props(resolved));
    }
}
exports.KubeEvictionV1Beta1 = KubeEvictionV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.policy.v1beta1.Eviction"
 */
KubeEvictionV1Beta1.GVK = {
    apiVersion: 'policy/v1beta1',
    kind: 'Eviction',
};
/**
 * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
 *
 * @schema io.k8s.api.policy.v1beta1.PodDisruptionBudget
 */
class KubePodDisruptionBudgetV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.policy.v1beta1.PodDisruptionBudget" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubePodDisruptionBudgetV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.policy.v1beta1.PodDisruptionBudget".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubePodDisruptionBudgetV1Beta1.GVK), toJson_KubePodDisruptionBudgetV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubePodDisruptionBudgetV1Beta1.GVK), toJson_KubePodDisruptionBudgetV1Beta1Props(resolved));
    }
}
exports.KubePodDisruptionBudgetV1Beta1 = KubePodDisruptionBudgetV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.policy.v1beta1.PodDisruptionBudget"
 */
KubePodDisruptionBudgetV1Beta1.GVK = {
    apiVersion: 'policy/v1beta1',
    kind: 'PodDisruptionBudget',
};
/**
 * PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
 *
 * @schema io.k8s.api.policy.v1beta1.PodDisruptionBudgetList
 */
class KubePodDisruptionBudgetListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.policy.v1beta1.PodDisruptionBudgetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubePodDisruptionBudgetListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.policy.v1beta1.PodDisruptionBudgetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePodDisruptionBudgetListV1Beta1.GVK), toJson_KubePodDisruptionBudgetListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubePodDisruptionBudgetListV1Beta1.GVK), toJson_KubePodDisruptionBudgetListV1Beta1Props(resolved));
    }
}
exports.KubePodDisruptionBudgetListV1Beta1 = KubePodDisruptionBudgetListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.policy.v1beta1.PodDisruptionBudgetList"
 */
KubePodDisruptionBudgetListV1Beta1.GVK = {
    apiVersion: 'policy/v1beta1',
    kind: 'PodDisruptionBudgetList',
};
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 *
 * @schema io.k8s.api.rbac.v1.ClusterRole
 */
class KubeClusterRole extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1.ClusterRole" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeClusterRole.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.ClusterRole".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeClusterRole.GVK), toJson_KubeClusterRoleProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeClusterRole.GVK), toJson_KubeClusterRoleProps(resolved));
    }
}
exports.KubeClusterRole = KubeClusterRole;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.ClusterRole"
 */
KubeClusterRole.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1',
    kind: 'ClusterRole',
};
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 *
 * @schema io.k8s.api.rbac.v1.ClusterRoleBinding
 */
class KubeClusterRoleBinding extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1.ClusterRoleBinding" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeClusterRoleBinding.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.ClusterRoleBinding".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeClusterRoleBinding.GVK), toJson_KubeClusterRoleBindingProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeClusterRoleBinding.GVK), toJson_KubeClusterRoleBindingProps(resolved));
    }
}
exports.KubeClusterRoleBinding = KubeClusterRoleBinding;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.ClusterRoleBinding"
 */
KubeClusterRoleBinding.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1',
    kind: 'ClusterRoleBinding',
};
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 *
 * @schema io.k8s.api.rbac.v1.ClusterRoleBindingList
 */
class KubeClusterRoleBindingList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1.ClusterRoleBindingList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeClusterRoleBindingList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.ClusterRoleBindingList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeClusterRoleBindingList.GVK), toJson_KubeClusterRoleBindingListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeClusterRoleBindingList.GVK), toJson_KubeClusterRoleBindingListProps(resolved));
    }
}
exports.KubeClusterRoleBindingList = KubeClusterRoleBindingList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.ClusterRoleBindingList"
 */
KubeClusterRoleBindingList.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1',
    kind: 'ClusterRoleBindingList',
};
/**
 * ClusterRoleList is a collection of ClusterRoles
 *
 * @schema io.k8s.api.rbac.v1.ClusterRoleList
 */
class KubeClusterRoleList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1.ClusterRoleList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeClusterRoleList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.ClusterRoleList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeClusterRoleList.GVK), toJson_KubeClusterRoleListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeClusterRoleList.GVK), toJson_KubeClusterRoleListProps(resolved));
    }
}
exports.KubeClusterRoleList = KubeClusterRoleList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.ClusterRoleList"
 */
KubeClusterRoleList.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1',
    kind: 'ClusterRoleList',
};
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 *
 * @schema io.k8s.api.rbac.v1.Role
 */
class KubeRole extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1.Role" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeRole.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.Role".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeRole.GVK), toJson_KubeRoleProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeRole.GVK), toJson_KubeRoleProps(resolved));
    }
}
exports.KubeRole = KubeRole;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.Role"
 */
KubeRole.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1',
    kind: 'Role',
};
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 *
 * @schema io.k8s.api.rbac.v1.RoleBinding
 */
class KubeRoleBinding extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1.RoleBinding" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeRoleBinding.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.RoleBinding".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRoleBinding.GVK), toJson_KubeRoleBindingProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeRoleBinding.GVK), toJson_KubeRoleBindingProps(resolved));
    }
}
exports.KubeRoleBinding = KubeRoleBinding;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.RoleBinding"
 */
KubeRoleBinding.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1',
    kind: 'RoleBinding',
};
/**
 * RoleBindingList is a collection of RoleBindings
 *
 * @schema io.k8s.api.rbac.v1.RoleBindingList
 */
class KubeRoleBindingList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1.RoleBindingList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeRoleBindingList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.RoleBindingList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRoleBindingList.GVK), toJson_KubeRoleBindingListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeRoleBindingList.GVK), toJson_KubeRoleBindingListProps(resolved));
    }
}
exports.KubeRoleBindingList = KubeRoleBindingList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.RoleBindingList"
 */
KubeRoleBindingList.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1',
    kind: 'RoleBindingList',
};
/**
 * RoleList is a collection of Roles
 *
 * @schema io.k8s.api.rbac.v1.RoleList
 */
class KubeRoleList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1.RoleList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeRoleList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1.RoleList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRoleList.GVK), toJson_KubeRoleListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeRoleList.GVK), toJson_KubeRoleListProps(resolved));
    }
}
exports.KubeRoleList = KubeRoleList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1.RoleList"
 */
KubeRoleList.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1',
    kind: 'RoleList',
};
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 *
 * @schema io.k8s.api.rbac.v1alpha1.ClusterRole
 */
class KubeClusterRoleV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.ClusterRole" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeClusterRoleV1Alpha1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.ClusterRole".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeClusterRoleV1Alpha1.GVK), toJson_KubeClusterRoleV1Alpha1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeClusterRoleV1Alpha1.GVK), toJson_KubeClusterRoleV1Alpha1Props(resolved));
    }
}
exports.KubeClusterRoleV1Alpha1 = KubeClusterRoleV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.ClusterRole"
 */
KubeClusterRoleV1Alpha1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1alpha1',
    kind: 'ClusterRole',
};
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 *
 * @schema io.k8s.api.rbac.v1alpha1.ClusterRoleBinding
 */
class KubeClusterRoleBindingV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.ClusterRoleBinding" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeClusterRoleBindingV1Alpha1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.ClusterRoleBinding".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeClusterRoleBindingV1Alpha1.GVK), toJson_KubeClusterRoleBindingV1Alpha1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeClusterRoleBindingV1Alpha1.GVK), toJson_KubeClusterRoleBindingV1Alpha1Props(resolved));
    }
}
exports.KubeClusterRoleBindingV1Alpha1 = KubeClusterRoleBindingV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.ClusterRoleBinding"
 */
KubeClusterRoleBindingV1Alpha1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1alpha1',
    kind: 'ClusterRoleBinding',
};
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 *
 * @schema io.k8s.api.rbac.v1alpha1.ClusterRoleBindingList
 */
class KubeClusterRoleBindingListV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.ClusterRoleBindingList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeClusterRoleBindingListV1Alpha1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.ClusterRoleBindingList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeClusterRoleBindingListV1Alpha1.GVK), toJson_KubeClusterRoleBindingListV1Alpha1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeClusterRoleBindingListV1Alpha1.GVK), toJson_KubeClusterRoleBindingListV1Alpha1Props(resolved));
    }
}
exports.KubeClusterRoleBindingListV1Alpha1 = KubeClusterRoleBindingListV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.ClusterRoleBindingList"
 */
KubeClusterRoleBindingListV1Alpha1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1alpha1',
    kind: 'ClusterRoleBindingList',
};
/**
 * ClusterRoleList is a collection of ClusterRoles
 *
 * @schema io.k8s.api.rbac.v1alpha1.ClusterRoleList
 */
class KubeClusterRoleListV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.ClusterRoleList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeClusterRoleListV1Alpha1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.ClusterRoleList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeClusterRoleListV1Alpha1.GVK), toJson_KubeClusterRoleListV1Alpha1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeClusterRoleListV1Alpha1.GVK), toJson_KubeClusterRoleListV1Alpha1Props(resolved));
    }
}
exports.KubeClusterRoleListV1Alpha1 = KubeClusterRoleListV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.ClusterRoleList"
 */
KubeClusterRoleListV1Alpha1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1alpha1',
    kind: 'ClusterRoleList',
};
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 *
 * @schema io.k8s.api.rbac.v1alpha1.Role
 */
class KubeRoleV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.Role" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeRoleV1Alpha1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.Role".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeRoleV1Alpha1.GVK), toJson_KubeRoleV1Alpha1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeRoleV1Alpha1.GVK), toJson_KubeRoleV1Alpha1Props(resolved));
    }
}
exports.KubeRoleV1Alpha1 = KubeRoleV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.Role"
 */
KubeRoleV1Alpha1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1alpha1',
    kind: 'Role',
};
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 *
 * @schema io.k8s.api.rbac.v1alpha1.RoleBinding
 */
class KubeRoleBindingV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.RoleBinding" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeRoleBindingV1Alpha1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.RoleBinding".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRoleBindingV1Alpha1.GVK), toJson_KubeRoleBindingV1Alpha1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeRoleBindingV1Alpha1.GVK), toJson_KubeRoleBindingV1Alpha1Props(resolved));
    }
}
exports.KubeRoleBindingV1Alpha1 = KubeRoleBindingV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.RoleBinding"
 */
KubeRoleBindingV1Alpha1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1alpha1',
    kind: 'RoleBinding',
};
/**
 * RoleBindingList is a collection of RoleBindings
 *
 * @schema io.k8s.api.rbac.v1alpha1.RoleBindingList
 */
class KubeRoleBindingListV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.RoleBindingList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeRoleBindingListV1Alpha1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.RoleBindingList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRoleBindingListV1Alpha1.GVK), toJson_KubeRoleBindingListV1Alpha1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeRoleBindingListV1Alpha1.GVK), toJson_KubeRoleBindingListV1Alpha1Props(resolved));
    }
}
exports.KubeRoleBindingListV1Alpha1 = KubeRoleBindingListV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.RoleBindingList"
 */
KubeRoleBindingListV1Alpha1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1alpha1',
    kind: 'RoleBindingList',
};
/**
 * RoleList is a collection of Roles
 *
 * @schema io.k8s.api.rbac.v1alpha1.RoleList
 */
class KubeRoleListV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1alpha1.RoleList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeRoleListV1Alpha1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1alpha1.RoleList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRoleListV1Alpha1.GVK), toJson_KubeRoleListV1Alpha1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeRoleListV1Alpha1.GVK), toJson_KubeRoleListV1Alpha1Props(resolved));
    }
}
exports.KubeRoleListV1Alpha1 = KubeRoleListV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1alpha1.RoleList"
 */
KubeRoleListV1Alpha1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1alpha1',
    kind: 'RoleList',
};
/**
 * ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.
 *
 * @schema io.k8s.api.rbac.v1beta1.ClusterRole
 */
class KubeClusterRoleV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.ClusterRole" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeClusterRoleV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.ClusterRole".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeClusterRoleV1Beta1.GVK), toJson_KubeClusterRoleV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeClusterRoleV1Beta1.GVK), toJson_KubeClusterRoleV1Beta1Props(resolved));
    }
}
exports.KubeClusterRoleV1Beta1 = KubeClusterRoleV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.ClusterRole"
 */
KubeClusterRoleV1Beta1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1beta1',
    kind: 'ClusterRole',
};
/**
 * ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.
 *
 * @schema io.k8s.api.rbac.v1beta1.ClusterRoleBinding
 */
class KubeClusterRoleBindingV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.ClusterRoleBinding" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeClusterRoleBindingV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.ClusterRoleBinding".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeClusterRoleBindingV1Beta1.GVK), toJson_KubeClusterRoleBindingV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeClusterRoleBindingV1Beta1.GVK), toJson_KubeClusterRoleBindingV1Beta1Props(resolved));
    }
}
exports.KubeClusterRoleBindingV1Beta1 = KubeClusterRoleBindingV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.ClusterRoleBinding"
 */
KubeClusterRoleBindingV1Beta1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1beta1',
    kind: 'ClusterRoleBinding',
};
/**
 * ClusterRoleBindingList is a collection of ClusterRoleBindings
 *
 * @schema io.k8s.api.rbac.v1beta1.ClusterRoleBindingList
 */
class KubeClusterRoleBindingListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.ClusterRoleBindingList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeClusterRoleBindingListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.ClusterRoleBindingList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeClusterRoleBindingListV1Beta1.GVK), toJson_KubeClusterRoleBindingListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeClusterRoleBindingListV1Beta1.GVK), toJson_KubeClusterRoleBindingListV1Beta1Props(resolved));
    }
}
exports.KubeClusterRoleBindingListV1Beta1 = KubeClusterRoleBindingListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.ClusterRoleBindingList"
 */
KubeClusterRoleBindingListV1Beta1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1beta1',
    kind: 'ClusterRoleBindingList',
};
/**
 * ClusterRoleList is a collection of ClusterRoles
 *
 * @schema io.k8s.api.rbac.v1beta1.ClusterRoleList
 */
class KubeClusterRoleListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.ClusterRoleList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeClusterRoleListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.ClusterRoleList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeClusterRoleListV1Beta1.GVK), toJson_KubeClusterRoleListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeClusterRoleListV1Beta1.GVK), toJson_KubeClusterRoleListV1Beta1Props(resolved));
    }
}
exports.KubeClusterRoleListV1Beta1 = KubeClusterRoleListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.ClusterRoleList"
 */
KubeClusterRoleListV1Beta1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1beta1',
    kind: 'ClusterRoleList',
};
/**
 * Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.
 *
 * @schema io.k8s.api.rbac.v1beta1.Role
 */
class KubeRoleV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.Role" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeRoleV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.Role".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeRoleV1Beta1.GVK), toJson_KubeRoleV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeRoleV1Beta1.GVK), toJson_KubeRoleV1Beta1Props(resolved));
    }
}
exports.KubeRoleV1Beta1 = KubeRoleV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.Role"
 */
KubeRoleV1Beta1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1beta1',
    kind: 'Role',
};
/**
 * RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.
 *
 * @schema io.k8s.api.rbac.v1beta1.RoleBinding
 */
class KubeRoleBindingV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.RoleBinding" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeRoleBindingV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.RoleBinding".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRoleBindingV1Beta1.GVK), toJson_KubeRoleBindingV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeRoleBindingV1Beta1.GVK), toJson_KubeRoleBindingV1Beta1Props(resolved));
    }
}
exports.KubeRoleBindingV1Beta1 = KubeRoleBindingV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.RoleBinding"
 */
KubeRoleBindingV1Beta1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1beta1',
    kind: 'RoleBinding',
};
/**
 * RoleBindingList is a collection of RoleBindings
 *
 * @schema io.k8s.api.rbac.v1beta1.RoleBindingList
 */
class KubeRoleBindingListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.RoleBindingList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeRoleBindingListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.RoleBindingList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRoleBindingListV1Beta1.GVK), toJson_KubeRoleBindingListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeRoleBindingListV1Beta1.GVK), toJson_KubeRoleBindingListV1Beta1Props(resolved));
    }
}
exports.KubeRoleBindingListV1Beta1 = KubeRoleBindingListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.RoleBindingList"
 */
KubeRoleBindingListV1Beta1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1beta1',
    kind: 'RoleBindingList',
};
/**
 * RoleList is a collection of Roles
 *
 * @schema io.k8s.api.rbac.v1beta1.RoleList
 */
class KubeRoleListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.rbac.v1beta1.RoleList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeRoleListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.rbac.v1beta1.RoleList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeRoleListV1Beta1.GVK), toJson_KubeRoleListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeRoleListV1Beta1.GVK), toJson_KubeRoleListV1Beta1Props(resolved));
    }
}
exports.KubeRoleListV1Beta1 = KubeRoleListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.rbac.v1beta1.RoleList"
 */
KubeRoleListV1Beta1.GVK = {
    apiVersion: 'rbac.authorization.k8s.io/v1beta1',
    kind: 'RoleList',
};
/**
 * PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 *
 * @schema io.k8s.api.scheduling.v1.PriorityClass
 */
class KubePriorityClass extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.scheduling.v1.PriorityClass" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubePriorityClass.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.scheduling.v1.PriorityClass".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePriorityClass.GVK), toJson_KubePriorityClassProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubePriorityClass.GVK), toJson_KubePriorityClassProps(resolved));
    }
}
exports.KubePriorityClass = KubePriorityClass;
/**
 * Returns the apiVersion and kind for "io.k8s.api.scheduling.v1.PriorityClass"
 */
KubePriorityClass.GVK = {
    apiVersion: 'scheduling.k8s.io/v1',
    kind: 'PriorityClass',
};
/**
 * PriorityClassList is a collection of priority classes.
 *
 * @schema io.k8s.api.scheduling.v1.PriorityClassList
 */
class KubePriorityClassList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.scheduling.v1.PriorityClassList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubePriorityClassList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.scheduling.v1.PriorityClassList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePriorityClassList.GVK), toJson_KubePriorityClassListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubePriorityClassList.GVK), toJson_KubePriorityClassListProps(resolved));
    }
}
exports.KubePriorityClassList = KubePriorityClassList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.scheduling.v1.PriorityClassList"
 */
KubePriorityClassList.GVK = {
    apiVersion: 'scheduling.k8s.io/v1',
    kind: 'PriorityClassList',
};
/**
 * DEPRECATED - This group version of PriorityClass is deprecated by scheduling.k8s.io/v1/PriorityClass. PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 *
 * @schema io.k8s.api.scheduling.v1alpha1.PriorityClass
 */
class KubePriorityClassV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.scheduling.v1alpha1.PriorityClass" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubePriorityClassV1Alpha1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.scheduling.v1alpha1.PriorityClass".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePriorityClassV1Alpha1.GVK), toJson_KubePriorityClassV1Alpha1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubePriorityClassV1Alpha1.GVK), toJson_KubePriorityClassV1Alpha1Props(resolved));
    }
}
exports.KubePriorityClassV1Alpha1 = KubePriorityClassV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.scheduling.v1alpha1.PriorityClass"
 */
KubePriorityClassV1Alpha1.GVK = {
    apiVersion: 'scheduling.k8s.io/v1alpha1',
    kind: 'PriorityClass',
};
/**
 * PriorityClassList is a collection of priority classes.
 *
 * @schema io.k8s.api.scheduling.v1alpha1.PriorityClassList
 */
class KubePriorityClassListV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.scheduling.v1alpha1.PriorityClassList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubePriorityClassListV1Alpha1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.scheduling.v1alpha1.PriorityClassList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePriorityClassListV1Alpha1.GVK), toJson_KubePriorityClassListV1Alpha1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubePriorityClassListV1Alpha1.GVK), toJson_KubePriorityClassListV1Alpha1Props(resolved));
    }
}
exports.KubePriorityClassListV1Alpha1 = KubePriorityClassListV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.scheduling.v1alpha1.PriorityClassList"
 */
KubePriorityClassListV1Alpha1.GVK = {
    apiVersion: 'scheduling.k8s.io/v1alpha1',
    kind: 'PriorityClassList',
};
/**
 * DEPRECATED - This group version of PriorityClass is deprecated by scheduling.k8s.io/v1/PriorityClass. PriorityClass defines mapping from a priority class name to the priority integer value. The value can be any valid integer.
 *
 * @schema io.k8s.api.scheduling.v1beta1.PriorityClass
 */
class KubePriorityClassV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.scheduling.v1beta1.PriorityClass" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubePriorityClassV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.scheduling.v1beta1.PriorityClass".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePriorityClassV1Beta1.GVK), toJson_KubePriorityClassV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubePriorityClassV1Beta1.GVK), toJson_KubePriorityClassV1Beta1Props(resolved));
    }
}
exports.KubePriorityClassV1Beta1 = KubePriorityClassV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.scheduling.v1beta1.PriorityClass"
 */
KubePriorityClassV1Beta1.GVK = {
    apiVersion: 'scheduling.k8s.io/v1beta1',
    kind: 'PriorityClass',
};
/**
 * PriorityClassList is a collection of priority classes.
 *
 * @schema io.k8s.api.scheduling.v1beta1.PriorityClassList
 */
class KubePriorityClassListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.scheduling.v1beta1.PriorityClassList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubePriorityClassListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.scheduling.v1beta1.PriorityClassList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePriorityClassListV1Beta1.GVK), toJson_KubePriorityClassListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubePriorityClassListV1Beta1.GVK), toJson_KubePriorityClassListV1Beta1Props(resolved));
    }
}
exports.KubePriorityClassListV1Beta1 = KubePriorityClassListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.scheduling.v1beta1.PriorityClassList"
 */
KubePriorityClassListV1Beta1.GVK = {
    apiVersion: 'scheduling.k8s.io/v1beta1',
    kind: 'PriorityClassList',
};
/**
 * PodPreset is a policy resource that defines additional runtime requirements for a Pod.
 *
 * @schema io.k8s.api.settings.v1alpha1.PodPreset
 */
class KubePodPresetV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.settings.v1alpha1.PodPreset" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubePodPresetV1Alpha1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.settings.v1alpha1.PodPreset".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubePodPresetV1Alpha1.GVK), toJson_KubePodPresetV1Alpha1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubePodPresetV1Alpha1.GVK), toJson_KubePodPresetV1Alpha1Props(resolved));
    }
}
exports.KubePodPresetV1Alpha1 = KubePodPresetV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.settings.v1alpha1.PodPreset"
 */
KubePodPresetV1Alpha1.GVK = {
    apiVersion: 'settings.k8s.io/v1alpha1',
    kind: 'PodPreset',
};
/**
 * PodPresetList is a list of PodPreset objects.
 *
 * @schema io.k8s.api.settings.v1alpha1.PodPresetList
 */
class KubePodPresetListV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.settings.v1alpha1.PodPresetList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubePodPresetListV1Alpha1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.settings.v1alpha1.PodPresetList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubePodPresetListV1Alpha1.GVK), toJson_KubePodPresetListV1Alpha1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubePodPresetListV1Alpha1.GVK), toJson_KubePodPresetListV1Alpha1Props(resolved));
    }
}
exports.KubePodPresetListV1Alpha1 = KubePodPresetListV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.settings.v1alpha1.PodPresetList"
 */
KubePodPresetListV1Alpha1.GVK = {
    apiVersion: 'settings.k8s.io/v1alpha1',
    kind: 'PodPresetList',
};
/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.

StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 *
 * @schema io.k8s.api.storage.v1.StorageClass
 */
class KubeStorageClass extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1.StorageClass" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeStorageClass.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1.StorageClass".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeStorageClass.GVK), toJson_KubeStorageClassProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeStorageClass.GVK), toJson_KubeStorageClassProps(resolved));
    }
}
exports.KubeStorageClass = KubeStorageClass;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1.StorageClass"
 */
KubeStorageClass.GVK = {
    apiVersion: 'storage.k8s.io/v1',
    kind: 'StorageClass',
};
/**
 * StorageClassList is a collection of storage classes.
 *
 * @schema io.k8s.api.storage.v1.StorageClassList
 */
class KubeStorageClassList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1.StorageClassList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeStorageClassList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1.StorageClassList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeStorageClassList.GVK), toJson_KubeStorageClassListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeStorageClassList.GVK), toJson_KubeStorageClassListProps(resolved));
    }
}
exports.KubeStorageClassList = KubeStorageClassList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1.StorageClassList"
 */
KubeStorageClassList.GVK = {
    apiVersion: 'storage.k8s.io/v1',
    kind: 'StorageClassList',
};
/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.

VolumeAttachment objects are non-namespaced.
 *
 * @schema io.k8s.api.storage.v1.VolumeAttachment
 */
class KubeVolumeAttachment extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1.VolumeAttachment" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeVolumeAttachment.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1.VolumeAttachment".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeVolumeAttachment.GVK), toJson_KubeVolumeAttachmentProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeVolumeAttachment.GVK), toJson_KubeVolumeAttachmentProps(resolved));
    }
}
exports.KubeVolumeAttachment = KubeVolumeAttachment;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1.VolumeAttachment"
 */
KubeVolumeAttachment.GVK = {
    apiVersion: 'storage.k8s.io/v1',
    kind: 'VolumeAttachment',
};
/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 *
 * @schema io.k8s.api.storage.v1.VolumeAttachmentList
 */
class KubeVolumeAttachmentList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1.VolumeAttachmentList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeVolumeAttachmentList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1.VolumeAttachmentList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeVolumeAttachmentList.GVK), toJson_KubeVolumeAttachmentListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeVolumeAttachmentList.GVK), toJson_KubeVolumeAttachmentListProps(resolved));
    }
}
exports.KubeVolumeAttachmentList = KubeVolumeAttachmentList;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1.VolumeAttachmentList"
 */
KubeVolumeAttachmentList.GVK = {
    apiVersion: 'storage.k8s.io/v1',
    kind: 'VolumeAttachmentList',
};
/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.

VolumeAttachment objects are non-namespaced.
 *
 * @schema io.k8s.api.storage.v1alpha1.VolumeAttachment
 */
class KubeVolumeAttachmentV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1alpha1.VolumeAttachment" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeVolumeAttachmentV1Alpha1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1alpha1.VolumeAttachment".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeVolumeAttachmentV1Alpha1.GVK), toJson_KubeVolumeAttachmentV1Alpha1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeVolumeAttachmentV1Alpha1.GVK), toJson_KubeVolumeAttachmentV1Alpha1Props(resolved));
    }
}
exports.KubeVolumeAttachmentV1Alpha1 = KubeVolumeAttachmentV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1alpha1.VolumeAttachment"
 */
KubeVolumeAttachmentV1Alpha1.GVK = {
    apiVersion: 'storage.k8s.io/v1alpha1',
    kind: 'VolumeAttachment',
};
/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 *
 * @schema io.k8s.api.storage.v1alpha1.VolumeAttachmentList
 */
class KubeVolumeAttachmentListV1Alpha1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1alpha1.VolumeAttachmentList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeVolumeAttachmentListV1Alpha1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1alpha1.VolumeAttachmentList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeVolumeAttachmentListV1Alpha1.GVK), toJson_KubeVolumeAttachmentListV1Alpha1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeVolumeAttachmentListV1Alpha1.GVK), toJson_KubeVolumeAttachmentListV1Alpha1Props(resolved));
    }
}
exports.KubeVolumeAttachmentListV1Alpha1 = KubeVolumeAttachmentListV1Alpha1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1alpha1.VolumeAttachmentList"
 */
KubeVolumeAttachmentListV1Alpha1.GVK = {
    apiVersion: 'storage.k8s.io/v1alpha1',
    kind: 'VolumeAttachmentList',
};
/**
 * CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. CSI drivers do not need to create the CSIDriver object directly. Instead they may use the cluster-driver-registrar sidecar container. When deployed with a CSI driver it automatically creates a CSIDriver object representing the driver. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced.
 *
 * @schema io.k8s.api.storage.v1beta1.CSIDriver
 */
class KubeCsiDriverV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1beta1.CSIDriver" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeCsiDriverV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.CSIDriver".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeCsiDriverV1Beta1.GVK), toJson_KubeCsiDriverV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeCsiDriverV1Beta1.GVK), toJson_KubeCsiDriverV1Beta1Props(resolved));
    }
}
exports.KubeCsiDriverV1Beta1 = KubeCsiDriverV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.CSIDriver"
 */
KubeCsiDriverV1Beta1.GVK = {
    apiVersion: 'storage.k8s.io/v1beta1',
    kind: 'CSIDriver',
};
/**
 * CSIDriverList is a collection of CSIDriver objects.
 *
 * @schema io.k8s.api.storage.v1beta1.CSIDriverList
 */
class KubeCsiDriverListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1beta1.CSIDriverList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeCsiDriverListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.CSIDriverList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeCsiDriverListV1Beta1.GVK), toJson_KubeCsiDriverListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeCsiDriverListV1Beta1.GVK), toJson_KubeCsiDriverListV1Beta1Props(resolved));
    }
}
exports.KubeCsiDriverListV1Beta1 = KubeCsiDriverListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.CSIDriverList"
 */
KubeCsiDriverListV1Beta1.GVK = {
    apiVersion: 'storage.k8s.io/v1beta1',
    kind: 'CSIDriverList',
};
/**
 * CSINode holds information about all CSI drivers installed on a node. CSI drivers do not need to create the CSINode object directly. As long as they use the node-driver-registrar sidecar container, the kubelet will automatically populate the CSINode object for the CSI driver as part of kubelet plugin registration. CSINode has the same name as a node. If the object is missing, it means either there are no CSI Drivers available on the node, or the Kubelet version is low enough that it doesn't create this object. CSINode has an OwnerReference that points to the corresponding node object.
 *
 * @schema io.k8s.api.storage.v1beta1.CSINode
 */
class KubeCsiNodeV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1beta1.CSINode" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeCsiNodeV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.CSINode".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeCsiNodeV1Beta1.GVK), toJson_KubeCsiNodeV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeCsiNodeV1Beta1.GVK), toJson_KubeCsiNodeV1Beta1Props(resolved));
    }
}
exports.KubeCsiNodeV1Beta1 = KubeCsiNodeV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.CSINode"
 */
KubeCsiNodeV1Beta1.GVK = {
    apiVersion: 'storage.k8s.io/v1beta1',
    kind: 'CSINode',
};
/**
 * CSINodeList is a collection of CSINode objects.
 *
 * @schema io.k8s.api.storage.v1beta1.CSINodeList
 */
class KubeCsiNodeListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1beta1.CSINodeList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeCsiNodeListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.CSINodeList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeCsiNodeListV1Beta1.GVK), toJson_KubeCsiNodeListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeCsiNodeListV1Beta1.GVK), toJson_KubeCsiNodeListV1Beta1Props(resolved));
    }
}
exports.KubeCsiNodeListV1Beta1 = KubeCsiNodeListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.CSINodeList"
 */
KubeCsiNodeListV1Beta1.GVK = {
    apiVersion: 'storage.k8s.io/v1beta1',
    kind: 'CSINodeList',
};
/**
 * StorageClass describes the parameters for a class of storage for which PersistentVolumes can be dynamically provisioned.

StorageClasses are non-namespaced; the name of the storage class according to etcd is in ObjectMeta.Name.
 *
 * @schema io.k8s.api.storage.v1beta1.StorageClass
 */
class KubeStorageClassV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1beta1.StorageClass" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeStorageClassV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.StorageClass".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeStorageClassV1Beta1.GVK), toJson_KubeStorageClassV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeStorageClassV1Beta1.GVK), toJson_KubeStorageClassV1Beta1Props(resolved));
    }
}
exports.KubeStorageClassV1Beta1 = KubeStorageClassV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.StorageClass"
 */
KubeStorageClassV1Beta1.GVK = {
    apiVersion: 'storage.k8s.io/v1beta1',
    kind: 'StorageClass',
};
/**
 * StorageClassList is a collection of storage classes.
 *
 * @schema io.k8s.api.storage.v1beta1.StorageClassList
 */
class KubeStorageClassListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1beta1.StorageClassList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeStorageClassListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.StorageClassList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeStorageClassListV1Beta1.GVK), toJson_KubeStorageClassListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeStorageClassListV1Beta1.GVK), toJson_KubeStorageClassListV1Beta1Props(resolved));
    }
}
exports.KubeStorageClassListV1Beta1 = KubeStorageClassListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.StorageClassList"
 */
KubeStorageClassListV1Beta1.GVK = {
    apiVersion: 'storage.k8s.io/v1beta1',
    kind: 'StorageClassList',
};
/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.

VolumeAttachment objects are non-namespaced.
 *
 * @schema io.k8s.api.storage.v1beta1.VolumeAttachment
 */
class KubeVolumeAttachmentV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1beta1.VolumeAttachment" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeVolumeAttachmentV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.VolumeAttachment".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeVolumeAttachmentV1Beta1.GVK), toJson_KubeVolumeAttachmentV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeVolumeAttachmentV1Beta1.GVK), toJson_KubeVolumeAttachmentV1Beta1Props(resolved));
    }
}
exports.KubeVolumeAttachmentV1Beta1 = KubeVolumeAttachmentV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.VolumeAttachment"
 */
KubeVolumeAttachmentV1Beta1.GVK = {
    apiVersion: 'storage.k8s.io/v1beta1',
    kind: 'VolumeAttachment',
};
/**
 * VolumeAttachmentList is a collection of VolumeAttachment objects.
 *
 * @schema io.k8s.api.storage.v1beta1.VolumeAttachmentList
 */
class KubeVolumeAttachmentListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.api.storage.v1beta1.VolumeAttachmentList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeVolumeAttachmentListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.api.storage.v1beta1.VolumeAttachmentList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeVolumeAttachmentListV1Beta1.GVK), toJson_KubeVolumeAttachmentListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeVolumeAttachmentListV1Beta1.GVK), toJson_KubeVolumeAttachmentListV1Beta1Props(resolved));
    }
}
exports.KubeVolumeAttachmentListV1Beta1 = KubeVolumeAttachmentListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.api.storage.v1beta1.VolumeAttachmentList"
 */
KubeVolumeAttachmentListV1Beta1.GVK = {
    apiVersion: 'storage.k8s.io/v1beta1',
    kind: 'VolumeAttachmentList',
};
/**
 * CustomResourceDefinition represents a resource that should be exposed on the API server.  Its name MUST be in the format <.spec.name>.<.spec.group>.
 *
 * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinition
 */
class KubeCustomResourceDefinitionV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinition" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeCustomResourceDefinitionV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinition".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeCustomResourceDefinitionV1Beta1.GVK), toJson_KubeCustomResourceDefinitionV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeCustomResourceDefinitionV1Beta1.GVK), toJson_KubeCustomResourceDefinitionV1Beta1Props(resolved));
    }
}
exports.KubeCustomResourceDefinitionV1Beta1 = KubeCustomResourceDefinitionV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinition"
 */
KubeCustomResourceDefinitionV1Beta1.GVK = {
    apiVersion: 'apiextensions.k8s.io/v1beta1',
    kind: 'CustomResourceDefinition',
};
/**
 * CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
 *
 * @schema io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionList
 */
class KubeCustomResourceDefinitionListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeCustomResourceDefinitionListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeCustomResourceDefinitionListV1Beta1.GVK), toJson_KubeCustomResourceDefinitionListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeCustomResourceDefinitionListV1Beta1.GVK), toJson_KubeCustomResourceDefinitionListV1Beta1Props(resolved));
    }
}
exports.KubeCustomResourceDefinitionListV1Beta1 = KubeCustomResourceDefinitionListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.apiextensions-apiserver.pkg.apis.apiextensions.v1beta1.CustomResourceDefinitionList"
 */
KubeCustomResourceDefinitionListV1Beta1.GVK = {
    apiVersion: 'apiextensions.k8s.io/v1beta1',
    kind: 'CustomResourceDefinitionList',
};
/**
 * Status is a return value for calls that don't return other objects.
 *
 * @schema io.k8s.apimachinery.pkg.apis.meta.v1.Status
 */
class KubeStatus extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.apimachinery.pkg.apis.meta.v1.Status" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeStatus.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.apimachinery.pkg.apis.meta.v1.Status".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeStatus.GVK), toJson_KubeStatusProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeStatus.GVK), toJson_KubeStatusProps(resolved));
    }
}
exports.KubeStatus = KubeStatus;
/**
 * Returns the apiVersion and kind for "io.k8s.apimachinery.pkg.apis.meta.v1.Status"
 */
KubeStatus.GVK = {
    apiVersion: 'v1',
    kind: 'Status',
};
/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 *
 * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIService
 */
class KubeApiService extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIService" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeApiService.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIService".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeApiService.GVK), toJson_KubeApiServiceProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeApiService.GVK), toJson_KubeApiServiceProps(resolved));
    }
}
exports.KubeApiService = KubeApiService;
/**
 * Returns the apiVersion and kind for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIService"
 */
KubeApiService.GVK = {
    apiVersion: 'apiregistration.k8s.io/v1',
    kind: 'APIService',
};
/**
 * APIServiceList is a list of APIService objects.
 *
 * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceList
 */
class KubeApiServiceList extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeApiServiceList.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeApiServiceList.GVK), toJson_KubeApiServiceListProps(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeApiServiceList.GVK), toJson_KubeApiServiceListProps(resolved));
    }
}
exports.KubeApiServiceList = KubeApiServiceList;
/**
 * Returns the apiVersion and kind for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1.APIServiceList"
 */
KubeApiServiceList.GVK = {
    apiVersion: 'apiregistration.k8s.io/v1',
    kind: 'APIServiceList',
};
/**
 * APIService represents a server for a particular GroupVersion. Name must be "version.group".
 *
 * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIService
 */
class KubeApiServiceV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIService" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props = {}) {
        super(scope, id, Object.assign(Object.assign({}, KubeApiServiceV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIService".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props = {}) {
        return Object.assign(Object.assign({}, KubeApiServiceV1Beta1.GVK), toJson_KubeApiServiceV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeApiServiceV1Beta1.GVK), toJson_KubeApiServiceV1Beta1Props(resolved));
    }
}
exports.KubeApiServiceV1Beta1 = KubeApiServiceV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIService"
 */
KubeApiServiceV1Beta1.GVK = {
    apiVersion: 'apiregistration.k8s.io/v1beta1',
    kind: 'APIService',
};
/**
 * APIServiceList is a list of APIService objects.
 *
 * @schema io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceList
 */
class KubeApiServiceListV1Beta1 extends cdk8s_1.ApiObject {
    /**
     * Defines a "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceList" API object
     * @param scope the scope in which to define this object
     * @param id a scope-local name for the object
     * @param props initialization props
     */
    constructor(scope, id, props) {
        super(scope, id, Object.assign(Object.assign({}, KubeApiServiceListV1Beta1.GVK), props));
    }
    /**
     * Renders a Kubernetes manifest for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceList".
     *
     * This can be used to inline resource manifests inside other objects (e.g. as templates).
     *
     * @param props initialization props
     */
    static manifest(props) {
        return Object.assign(Object.assign({}, KubeApiServiceListV1Beta1.GVK), toJson_KubeApiServiceListV1Beta1Props(props));
    }
    /**
     * Renders the object to Kubernetes JSON.
     */
    toJson() {
        const resolved = super.toJson();
        return Object.assign(Object.assign({}, KubeApiServiceListV1Beta1.GVK), toJson_KubeApiServiceListV1Beta1Props(resolved));
    }
}
exports.KubeApiServiceListV1Beta1 = KubeApiServiceListV1Beta1;
/**
 * Returns the apiVersion and kind for "io.k8s.kube-aggregator.pkg.apis.apiregistration.v1beta1.APIServiceList"
 */
KubeApiServiceListV1Beta1.GVK = {
    apiVersion: 'apiregistration.k8s.io/v1beta1',
    kind: 'APIServiceList',
};
/**
 * Converts an object of type 'KubeMutatingWebhookConfigurationV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeMutatingWebhookConfigurationV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'webhooks': (_a = obj.webhooks) === null || _a === void 0 ? void 0 : _a.map(y => toJson_MutatingWebhookV1Beta1(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeMutatingWebhookConfigurationV1Beta1Props = toJson_KubeMutatingWebhookConfigurationV1Beta1Props;
/**
 * Converts an object of type 'KubeMutatingWebhookConfigurationListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeMutatingWebhookConfigurationListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeMutatingWebhookConfigurationV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeMutatingWebhookConfigurationListV1Beta1Props = toJson_KubeMutatingWebhookConfigurationListV1Beta1Props;
/**
 * Converts an object of type 'KubeValidatingWebhookConfigurationV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeValidatingWebhookConfigurationV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'webhooks': (_a = obj.webhooks) === null || _a === void 0 ? void 0 : _a.map(y => toJson_ValidatingWebhookV1Beta1(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeValidatingWebhookConfigurationV1Beta1Props = toJson_KubeValidatingWebhookConfigurationV1Beta1Props;
/**
 * Converts an object of type 'KubeValidatingWebhookConfigurationListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeValidatingWebhookConfigurationListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeValidatingWebhookConfigurationV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeValidatingWebhookConfigurationListV1Beta1Props = toJson_KubeValidatingWebhookConfigurationListV1Beta1Props;
/**
 * Converts an object of type 'KubeControllerRevisionProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeControllerRevisionProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'data': toJson_RawExtension(obj.data),
        'metadata': toJson_ObjectMeta(obj.metadata),
        'revision': obj.revision,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeControllerRevisionProps = toJson_KubeControllerRevisionProps;
/**
 * Converts an object of type 'KubeControllerRevisionListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeControllerRevisionListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeControllerRevisionProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeControllerRevisionListProps = toJson_KubeControllerRevisionListProps;
/**
 * Converts an object of type 'KubeDaemonSetProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeDaemonSetProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_DaemonSetSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeDaemonSetProps = toJson_KubeDaemonSetProps;
/**
 * Converts an object of type 'KubeDaemonSetListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeDaemonSetListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeDaemonSetProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeDaemonSetListProps = toJson_KubeDaemonSetListProps;
/**
 * Converts an object of type 'KubeDeploymentProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeDeploymentProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_DeploymentSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeDeploymentProps = toJson_KubeDeploymentProps;
/**
 * Converts an object of type 'KubeDeploymentListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeDeploymentListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeDeploymentProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeDeploymentListProps = toJson_KubeDeploymentListProps;
/**
 * Converts an object of type 'KubeReplicaSetProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeReplicaSetProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_ReplicaSetSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeReplicaSetProps = toJson_KubeReplicaSetProps;
/**
 * Converts an object of type 'KubeReplicaSetListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeReplicaSetListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeReplicaSetProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeReplicaSetListProps = toJson_KubeReplicaSetListProps;
/**
 * Converts an object of type 'KubeStatefulSetProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeStatefulSetProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_StatefulSetSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeStatefulSetProps = toJson_KubeStatefulSetProps;
/**
 * Converts an object of type 'KubeStatefulSetListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeStatefulSetListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeStatefulSetProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeStatefulSetListProps = toJson_KubeStatefulSetListProps;
/**
 * Converts an object of type 'KubeControllerRevisionV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeControllerRevisionV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'data': toJson_RawExtension(obj.data),
        'metadata': toJson_ObjectMeta(obj.metadata),
        'revision': obj.revision,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeControllerRevisionV1Beta1Props = toJson_KubeControllerRevisionV1Beta1Props;
/**
 * Converts an object of type 'KubeControllerRevisionListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeControllerRevisionListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeControllerRevisionV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeControllerRevisionListV1Beta1Props = toJson_KubeControllerRevisionListV1Beta1Props;
/**
 * Converts an object of type 'KubeDeploymentV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeDeploymentV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_DeploymentSpecV1Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeDeploymentV1Beta1Props = toJson_KubeDeploymentV1Beta1Props;
/**
 * Converts an object of type 'KubeDeploymentListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeDeploymentListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeDeploymentV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeDeploymentListV1Beta1Props = toJson_KubeDeploymentListV1Beta1Props;
/**
 * Converts an object of type 'KubeScaleV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeScaleV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_ScaleSpecV1Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeScaleV1Beta1Props = toJson_KubeScaleV1Beta1Props;
/**
 * Converts an object of type 'KubeStatefulSetV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeStatefulSetV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_StatefulSetSpecV1Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeStatefulSetV1Beta1Props = toJson_KubeStatefulSetV1Beta1Props;
/**
 * Converts an object of type 'KubeStatefulSetListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeStatefulSetListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeStatefulSetV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeStatefulSetListV1Beta1Props = toJson_KubeStatefulSetListV1Beta1Props;
/**
 * Converts an object of type 'KubeControllerRevisionV1Beta2Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeControllerRevisionV1Beta2Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'data': toJson_RawExtension(obj.data),
        'metadata': toJson_ObjectMeta(obj.metadata),
        'revision': obj.revision,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeControllerRevisionV1Beta2Props = toJson_KubeControllerRevisionV1Beta2Props;
/**
 * Converts an object of type 'KubeControllerRevisionListV1Beta2Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeControllerRevisionListV1Beta2Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeControllerRevisionV1Beta2Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeControllerRevisionListV1Beta2Props = toJson_KubeControllerRevisionListV1Beta2Props;
/**
 * Converts an object of type 'KubeDaemonSetV1Beta2Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeDaemonSetV1Beta2Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_DaemonSetSpecV1Beta2(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeDaemonSetV1Beta2Props = toJson_KubeDaemonSetV1Beta2Props;
/**
 * Converts an object of type 'KubeDaemonSetListV1Beta2Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeDaemonSetListV1Beta2Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeDaemonSetV1Beta2Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeDaemonSetListV1Beta2Props = toJson_KubeDaemonSetListV1Beta2Props;
/**
 * Converts an object of type 'KubeDeploymentV1Beta2Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeDeploymentV1Beta2Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_DeploymentSpecV1Beta2(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeDeploymentV1Beta2Props = toJson_KubeDeploymentV1Beta2Props;
/**
 * Converts an object of type 'KubeDeploymentListV1Beta2Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeDeploymentListV1Beta2Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeDeploymentV1Beta2Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeDeploymentListV1Beta2Props = toJson_KubeDeploymentListV1Beta2Props;
/**
 * Converts an object of type 'KubeReplicaSetV1Beta2Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeReplicaSetV1Beta2Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_ReplicaSetSpecV1Beta2(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeReplicaSetV1Beta2Props = toJson_KubeReplicaSetV1Beta2Props;
/**
 * Converts an object of type 'KubeReplicaSetListV1Beta2Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeReplicaSetListV1Beta2Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeReplicaSetV1Beta2Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeReplicaSetListV1Beta2Props = toJson_KubeReplicaSetListV1Beta2Props;
/**
 * Converts an object of type 'KubeScaleV1Beta2Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeScaleV1Beta2Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_ScaleSpecV1Beta2(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeScaleV1Beta2Props = toJson_KubeScaleV1Beta2Props;
/**
 * Converts an object of type 'KubeStatefulSetV1Beta2Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeStatefulSetV1Beta2Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_StatefulSetSpecV1Beta2(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeStatefulSetV1Beta2Props = toJson_KubeStatefulSetV1Beta2Props;
/**
 * Converts an object of type 'KubeStatefulSetListV1Beta2Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeStatefulSetListV1Beta2Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeStatefulSetV1Beta2Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeStatefulSetListV1Beta2Props = toJson_KubeStatefulSetListV1Beta2Props;
/**
 * Converts an object of type 'KubeAuditSinkV1Alpha1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeAuditSinkV1Alpha1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_AuditSinkSpecV1Alpha1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeAuditSinkV1Alpha1Props = toJson_KubeAuditSinkV1Alpha1Props;
/**
 * Converts an object of type 'KubeAuditSinkListV1Alpha1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeAuditSinkListV1Alpha1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeAuditSinkV1Alpha1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeAuditSinkListV1Alpha1Props = toJson_KubeAuditSinkListV1Alpha1Props;
/**
 * Converts an object of type 'KubeTokenReviewProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeTokenReviewProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_TokenReviewSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeTokenReviewProps = toJson_KubeTokenReviewProps;
/**
 * Converts an object of type 'KubeTokenReviewV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeTokenReviewV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_TokenReviewSpecV1Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeTokenReviewV1Beta1Props = toJson_KubeTokenReviewV1Beta1Props;
/**
 * Converts an object of type 'KubeLocalSubjectAccessReviewProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeLocalSubjectAccessReviewProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_SubjectAccessReviewSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeLocalSubjectAccessReviewProps = toJson_KubeLocalSubjectAccessReviewProps;
/**
 * Converts an object of type 'KubeSelfSubjectAccessReviewProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeSelfSubjectAccessReviewProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_SelfSubjectAccessReviewSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeSelfSubjectAccessReviewProps = toJson_KubeSelfSubjectAccessReviewProps;
/**
 * Converts an object of type 'KubeSelfSubjectRulesReviewProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeSelfSubjectRulesReviewProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_SelfSubjectRulesReviewSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeSelfSubjectRulesReviewProps = toJson_KubeSelfSubjectRulesReviewProps;
/**
 * Converts an object of type 'KubeSubjectAccessReviewProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeSubjectAccessReviewProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_SubjectAccessReviewSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeSubjectAccessReviewProps = toJson_KubeSubjectAccessReviewProps;
/**
 * Converts an object of type 'KubeLocalSubjectAccessReviewV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeLocalSubjectAccessReviewV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_SubjectAccessReviewSpecV1Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeLocalSubjectAccessReviewV1Beta1Props = toJson_KubeLocalSubjectAccessReviewV1Beta1Props;
/**
 * Converts an object of type 'KubeSelfSubjectAccessReviewV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeSelfSubjectAccessReviewV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_SelfSubjectAccessReviewSpecV1Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeSelfSubjectAccessReviewV1Beta1Props = toJson_KubeSelfSubjectAccessReviewV1Beta1Props;
/**
 * Converts an object of type 'KubeSelfSubjectRulesReviewV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeSelfSubjectRulesReviewV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_SelfSubjectRulesReviewSpecV1Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeSelfSubjectRulesReviewV1Beta1Props = toJson_KubeSelfSubjectRulesReviewV1Beta1Props;
/**
 * Converts an object of type 'KubeSubjectAccessReviewV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeSubjectAccessReviewV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_SubjectAccessReviewSpecV1Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeSubjectAccessReviewV1Beta1Props = toJson_KubeSubjectAccessReviewV1Beta1Props;
/**
 * Converts an object of type 'KubeHorizontalPodAutoscalerProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeHorizontalPodAutoscalerProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_HorizontalPodAutoscalerSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeHorizontalPodAutoscalerProps = toJson_KubeHorizontalPodAutoscalerProps;
/**
 * Converts an object of type 'KubeHorizontalPodAutoscalerListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeHorizontalPodAutoscalerListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeHorizontalPodAutoscalerProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeHorizontalPodAutoscalerListProps = toJson_KubeHorizontalPodAutoscalerListProps;
/**
 * Converts an object of type 'KubeScaleProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeScaleProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_ScaleSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeScaleProps = toJson_KubeScaleProps;
/**
 * Converts an object of type 'KubeHorizontalPodAutoscalerV2Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeHorizontalPodAutoscalerV2Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_HorizontalPodAutoscalerSpecV2Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeHorizontalPodAutoscalerV2Beta1Props = toJson_KubeHorizontalPodAutoscalerV2Beta1Props;
/**
 * Converts an object of type 'KubeHorizontalPodAutoscalerListV2Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeHorizontalPodAutoscalerListV2Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeHorizontalPodAutoscalerV2Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeHorizontalPodAutoscalerListV2Beta1Props = toJson_KubeHorizontalPodAutoscalerListV2Beta1Props;
/**
 * Converts an object of type 'KubeHorizontalPodAutoscalerV2Beta2Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeHorizontalPodAutoscalerV2Beta2Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_HorizontalPodAutoscalerSpecV2Beta2(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeHorizontalPodAutoscalerV2Beta2Props = toJson_KubeHorizontalPodAutoscalerV2Beta2Props;
/**
 * Converts an object of type 'KubeHorizontalPodAutoscalerListV2Beta2Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeHorizontalPodAutoscalerListV2Beta2Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeHorizontalPodAutoscalerV2Beta2Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeHorizontalPodAutoscalerListV2Beta2Props = toJson_KubeHorizontalPodAutoscalerListV2Beta2Props;
/**
 * Converts an object of type 'KubeJobProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeJobProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_JobSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeJobProps = toJson_KubeJobProps;
/**
 * Converts an object of type 'KubeJobListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeJobListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeJobProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeJobListProps = toJson_KubeJobListProps;
/**
 * Converts an object of type 'KubeCronJobV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeCronJobV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_CronJobSpecV1Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeCronJobV1Beta1Props = toJson_KubeCronJobV1Beta1Props;
/**
 * Converts an object of type 'KubeCronJobListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeCronJobListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeCronJobV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeCronJobListV1Beta1Props = toJson_KubeCronJobListV1Beta1Props;
/**
 * Converts an object of type 'KubeCronJobV2Alpha1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeCronJobV2Alpha1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_CronJobSpecV2Alpha1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeCronJobV2Alpha1Props = toJson_KubeCronJobV2Alpha1Props;
/**
 * Converts an object of type 'KubeCronJobListV2Alpha1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeCronJobListV2Alpha1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeCronJobV2Alpha1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeCronJobListV2Alpha1Props = toJson_KubeCronJobListV2Alpha1Props;
/**
 * Converts an object of type 'KubeCertificateSigningRequestV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeCertificateSigningRequestV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_CertificateSigningRequestSpecV1Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeCertificateSigningRequestV1Beta1Props = toJson_KubeCertificateSigningRequestV1Beta1Props;
/**
 * Converts an object of type 'KubeCertificateSigningRequestListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeCertificateSigningRequestListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeCertificateSigningRequestV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeCertificateSigningRequestListV1Beta1Props = toJson_KubeCertificateSigningRequestListV1Beta1Props;
/**
 * Converts an object of type 'KubeLeaseProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeLeaseProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_LeaseSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeLeaseProps = toJson_KubeLeaseProps;
/**
 * Converts an object of type 'KubeLeaseListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeLeaseListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeLeaseProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeLeaseListProps = toJson_KubeLeaseListProps;
/**
 * Converts an object of type 'KubeLeaseV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeLeaseV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_LeaseSpecV1Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeLeaseV1Beta1Props = toJson_KubeLeaseV1Beta1Props;
/**
 * Converts an object of type 'KubeLeaseListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeLeaseListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeLeaseV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeLeaseListV1Beta1Props = toJson_KubeLeaseListV1Beta1Props;
/**
 * Converts an object of type 'KubeBindingProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeBindingProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'target': toJson_ObjectReference(obj.target),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeBindingProps = toJson_KubeBindingProps;
/**
 * Converts an object of type 'KubeComponentStatusProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeComponentStatusProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'conditions': (_a = obj.conditions) === null || _a === void 0 ? void 0 : _a.map(y => toJson_ComponentCondition(y)),
        'metadata': toJson_ObjectMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeComponentStatusProps = toJson_KubeComponentStatusProps;
/**
 * Converts an object of type 'KubeComponentStatusListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeComponentStatusListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeComponentStatusProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeComponentStatusListProps = toJson_KubeComponentStatusListProps;
/**
 * Converts an object of type 'KubeConfigMapProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeConfigMapProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'binaryData': ((obj.binaryData) === undefined) ? undefined : (Object.entries(obj.binaryData).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {})),
        'data': ((obj.data) === undefined) ? undefined : (Object.entries(obj.data).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {})),
        'metadata': toJson_ObjectMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeConfigMapProps = toJson_KubeConfigMapProps;
/**
 * Converts an object of type 'KubeConfigMapListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeConfigMapListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeConfigMapProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeConfigMapListProps = toJson_KubeConfigMapListProps;
/**
 * Converts an object of type 'KubeEndpointsProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeEndpointsProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'subsets': (_a = obj.subsets) === null || _a === void 0 ? void 0 : _a.map(y => toJson_EndpointSubset(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeEndpointsProps = toJson_KubeEndpointsProps;
/**
 * Converts an object of type 'KubeEndpointsListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeEndpointsListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeEndpointsProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeEndpointsListProps = toJson_KubeEndpointsListProps;
/**
 * Converts an object of type 'KubeEventProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeEventProps(obj) {
    var _a, _b, _c;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'action': obj.action,
        'count': obj.count,
        'eventTime': (_a = obj.eventTime) === null || _a === void 0 ? void 0 : _a.toISOString(),
        'firstTimestamp': (_b = obj.firstTimestamp) === null || _b === void 0 ? void 0 : _b.toISOString(),
        'involvedObject': toJson_ObjectReference(obj.involvedObject),
        'lastTimestamp': (_c = obj.lastTimestamp) === null || _c === void 0 ? void 0 : _c.toISOString(),
        'message': obj.message,
        'metadata': toJson_ObjectMeta(obj.metadata),
        'reason': obj.reason,
        'related': toJson_ObjectReference(obj.related),
        'reportingComponent': obj.reportingComponent,
        'reportingInstance': obj.reportingInstance,
        'series': toJson_EventSeries(obj.series),
        'source': toJson_EventSource(obj.source),
        'type': obj.type,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeEventProps = toJson_KubeEventProps;
/**
 * Converts an object of type 'KubeEventListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeEventListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeEventProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeEventListProps = toJson_KubeEventListProps;
/**
 * Converts an object of type 'KubeLimitRangeProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeLimitRangeProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_LimitRangeSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeLimitRangeProps = toJson_KubeLimitRangeProps;
/**
 * Converts an object of type 'KubeLimitRangeListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeLimitRangeListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeLimitRangeProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeLimitRangeListProps = toJson_KubeLimitRangeListProps;
/**
 * Converts an object of type 'KubeNamespaceProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeNamespaceProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_NamespaceSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeNamespaceProps = toJson_KubeNamespaceProps;
/**
 * Converts an object of type 'KubeNamespaceListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeNamespaceListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeNamespaceProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeNamespaceListProps = toJson_KubeNamespaceListProps;
/**
 * Converts an object of type 'KubeNodeProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeNodeProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_NodeSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeNodeProps = toJson_KubeNodeProps;
/**
 * Converts an object of type 'KubeNodeListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeNodeListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeNodeProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeNodeListProps = toJson_KubeNodeListProps;
/**
 * Converts an object of type 'KubePersistentVolumeProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubePersistentVolumeProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_PersistentVolumeSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubePersistentVolumeProps = toJson_KubePersistentVolumeProps;
/**
 * Converts an object of type 'KubePersistentVolumeClaimProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubePersistentVolumeClaimProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_PersistentVolumeClaimSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubePersistentVolumeClaimProps = toJson_KubePersistentVolumeClaimProps;
/**
 * Converts an object of type 'KubePersistentVolumeClaimListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubePersistentVolumeClaimListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubePersistentVolumeClaimProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubePersistentVolumeClaimListProps = toJson_KubePersistentVolumeClaimListProps;
/**
 * Converts an object of type 'KubePersistentVolumeListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubePersistentVolumeListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubePersistentVolumeProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubePersistentVolumeListProps = toJson_KubePersistentVolumeListProps;
/**
 * Converts an object of type 'KubePodProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubePodProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_PodSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubePodProps = toJson_KubePodProps;
/**
 * Converts an object of type 'KubePodListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubePodListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubePodProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubePodListProps = toJson_KubePodListProps;
/**
 * Converts an object of type 'KubePodTemplateProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubePodTemplateProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'template': toJson_PodTemplateSpec(obj.template),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubePodTemplateProps = toJson_KubePodTemplateProps;
/**
 * Converts an object of type 'KubePodTemplateListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubePodTemplateListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubePodTemplateProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubePodTemplateListProps = toJson_KubePodTemplateListProps;
/**
 * Converts an object of type 'KubeReplicationControllerProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeReplicationControllerProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_ReplicationControllerSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeReplicationControllerProps = toJson_KubeReplicationControllerProps;
/**
 * Converts an object of type 'KubeReplicationControllerListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeReplicationControllerListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeReplicationControllerProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeReplicationControllerListProps = toJson_KubeReplicationControllerListProps;
/**
 * Converts an object of type 'KubeResourceQuotaProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeResourceQuotaProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_ResourceQuotaSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeResourceQuotaProps = toJson_KubeResourceQuotaProps;
/**
 * Converts an object of type 'KubeResourceQuotaListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeResourceQuotaListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeResourceQuotaProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeResourceQuotaListProps = toJson_KubeResourceQuotaListProps;
/**
 * Converts an object of type 'KubeSecretProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeSecretProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'data': ((obj.data) === undefined) ? undefined : (Object.entries(obj.data).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {})),
        'metadata': toJson_ObjectMeta(obj.metadata),
        'stringData': ((obj.stringData) === undefined) ? undefined : (Object.entries(obj.stringData).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {})),
        'type': obj.type,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeSecretProps = toJson_KubeSecretProps;
/**
 * Converts an object of type 'KubeSecretListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeSecretListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeSecretProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeSecretListProps = toJson_KubeSecretListProps;
/**
 * Converts an object of type 'KubeServiceProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeServiceProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_ServiceSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeServiceProps = toJson_KubeServiceProps;
/**
 * Converts an object of type 'KubeServiceAccountProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeServiceAccountProps(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'automountServiceAccountToken': obj.automountServiceAccountToken,
        'imagePullSecrets': (_a = obj.imagePullSecrets) === null || _a === void 0 ? void 0 : _a.map(y => toJson_LocalObjectReference(y)),
        'metadata': toJson_ObjectMeta(obj.metadata),
        'secrets': (_b = obj.secrets) === null || _b === void 0 ? void 0 : _b.map(y => toJson_ObjectReference(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeServiceAccountProps = toJson_KubeServiceAccountProps;
/**
 * Converts an object of type 'KubeServiceAccountListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeServiceAccountListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeServiceAccountProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeServiceAccountListProps = toJson_KubeServiceAccountListProps;
/**
 * Converts an object of type 'KubeServiceListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeServiceListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeServiceProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeServiceListProps = toJson_KubeServiceListProps;
/**
 * Converts an object of type 'KubeEventV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeEventV1Beta1Props(obj) {
    var _a, _b, _c;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'action': obj.action,
        'deprecatedCount': obj.deprecatedCount,
        'deprecatedFirstTimestamp': (_a = obj.deprecatedFirstTimestamp) === null || _a === void 0 ? void 0 : _a.toISOString(),
        'deprecatedLastTimestamp': (_b = obj.deprecatedLastTimestamp) === null || _b === void 0 ? void 0 : _b.toISOString(),
        'deprecatedSource': toJson_EventSource(obj.deprecatedSource),
        'eventTime': (_c = obj.eventTime) === null || _c === void 0 ? void 0 : _c.toISOString(),
        'metadata': toJson_ObjectMeta(obj.metadata),
        'note': obj.note,
        'reason': obj.reason,
        'regarding': toJson_ObjectReference(obj.regarding),
        'related': toJson_ObjectReference(obj.related),
        'reportingController': obj.reportingController,
        'reportingInstance': obj.reportingInstance,
        'series': toJson_EventSeriesV1Beta1(obj.series),
        'type': obj.type,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeEventV1Beta1Props = toJson_KubeEventV1Beta1Props;
/**
 * Converts an object of type 'KubeEventListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeEventListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeEventV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeEventListV1Beta1Props = toJson_KubeEventListV1Beta1Props;
/**
 * Converts an object of type 'KubeDaemonSetV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeDaemonSetV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_DaemonSetSpecV1Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeDaemonSetV1Beta1Props = toJson_KubeDaemonSetV1Beta1Props;
/**
 * Converts an object of type 'KubeDaemonSetListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeDaemonSetListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeDaemonSetV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeDaemonSetListV1Beta1Props = toJson_KubeDaemonSetListV1Beta1Props;
/**
 * Converts an object of type 'KubeIngressV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeIngressV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_IngressSpecV1Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeIngressV1Beta1Props = toJson_KubeIngressV1Beta1Props;
/**
 * Converts an object of type 'KubeIngressListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeIngressListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeIngressV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeIngressListV1Beta1Props = toJson_KubeIngressListV1Beta1Props;
/**
 * Converts an object of type 'KubeNetworkPolicyV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeNetworkPolicyV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_NetworkPolicySpecV1Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeNetworkPolicyV1Beta1Props = toJson_KubeNetworkPolicyV1Beta1Props;
/**
 * Converts an object of type 'KubeNetworkPolicyListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeNetworkPolicyListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeNetworkPolicyV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeNetworkPolicyListV1Beta1Props = toJson_KubeNetworkPolicyListV1Beta1Props;
/**
 * Converts an object of type 'KubePodSecurityPolicyV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubePodSecurityPolicyV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_PodSecurityPolicySpecV1Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubePodSecurityPolicyV1Beta1Props = toJson_KubePodSecurityPolicyV1Beta1Props;
/**
 * Converts an object of type 'KubePodSecurityPolicyListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubePodSecurityPolicyListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubePodSecurityPolicyV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubePodSecurityPolicyListV1Beta1Props = toJson_KubePodSecurityPolicyListV1Beta1Props;
/**
 * Converts an object of type 'KubeReplicaSetV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeReplicaSetV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_ReplicaSetSpecV1Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeReplicaSetV1Beta1Props = toJson_KubeReplicaSetV1Beta1Props;
/**
 * Converts an object of type 'KubeReplicaSetListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeReplicaSetListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeReplicaSetV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeReplicaSetListV1Beta1Props = toJson_KubeReplicaSetListV1Beta1Props;
/**
 * Converts an object of type 'KubeNetworkPolicyProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeNetworkPolicyProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_NetworkPolicySpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeNetworkPolicyProps = toJson_KubeNetworkPolicyProps;
/**
 * Converts an object of type 'KubeNetworkPolicyListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeNetworkPolicyListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeNetworkPolicyProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeNetworkPolicyListProps = toJson_KubeNetworkPolicyListProps;
/**
 * Converts an object of type 'KubeRuntimeClassV1Alpha1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeRuntimeClassV1Alpha1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_RuntimeClassSpecV1Alpha1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeRuntimeClassV1Alpha1Props = toJson_KubeRuntimeClassV1Alpha1Props;
/**
 * Converts an object of type 'KubeRuntimeClassListV1Alpha1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeRuntimeClassListV1Alpha1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeRuntimeClassV1Alpha1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeRuntimeClassListV1Alpha1Props = toJson_KubeRuntimeClassListV1Alpha1Props;
/**
 * Converts an object of type 'KubeRuntimeClassV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeRuntimeClassV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'handler': obj.handler,
        'metadata': toJson_ObjectMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeRuntimeClassV1Beta1Props = toJson_KubeRuntimeClassV1Beta1Props;
/**
 * Converts an object of type 'KubeRuntimeClassListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeRuntimeClassListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeRuntimeClassV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeRuntimeClassListV1Beta1Props = toJson_KubeRuntimeClassListV1Beta1Props;
/**
 * Converts an object of type 'KubeEvictionV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeEvictionV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'deleteOptions': toJson_DeleteOptions(obj.deleteOptions),
        'metadata': toJson_ObjectMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeEvictionV1Beta1Props = toJson_KubeEvictionV1Beta1Props;
/**
 * Converts an object of type 'KubePodDisruptionBudgetV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubePodDisruptionBudgetV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_PodDisruptionBudgetSpecV1Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubePodDisruptionBudgetV1Beta1Props = toJson_KubePodDisruptionBudgetV1Beta1Props;
/**
 * Converts an object of type 'KubePodDisruptionBudgetListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubePodDisruptionBudgetListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubePodDisruptionBudgetV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubePodDisruptionBudgetListV1Beta1Props = toJson_KubePodDisruptionBudgetListV1Beta1Props;
/**
 * Converts an object of type 'KubeClusterRoleProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeClusterRoleProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'aggregationRule': toJson_AggregationRule(obj.aggregationRule),
        'metadata': toJson_ObjectMeta(obj.metadata),
        'rules': (_a = obj.rules) === null || _a === void 0 ? void 0 : _a.map(y => toJson_PolicyRule(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeClusterRoleProps = toJson_KubeClusterRoleProps;
/**
 * Converts an object of type 'KubeClusterRoleBindingProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeClusterRoleBindingProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'roleRef': toJson_RoleRef(obj.roleRef),
        'subjects': (_a = obj.subjects) === null || _a === void 0 ? void 0 : _a.map(y => toJson_Subject(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeClusterRoleBindingProps = toJson_KubeClusterRoleBindingProps;
/**
 * Converts an object of type 'KubeClusterRoleBindingListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeClusterRoleBindingListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeClusterRoleBindingProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeClusterRoleBindingListProps = toJson_KubeClusterRoleBindingListProps;
/**
 * Converts an object of type 'KubeClusterRoleListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeClusterRoleListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeClusterRoleProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeClusterRoleListProps = toJson_KubeClusterRoleListProps;
/**
 * Converts an object of type 'KubeRoleProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeRoleProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'rules': (_a = obj.rules) === null || _a === void 0 ? void 0 : _a.map(y => toJson_PolicyRule(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeRoleProps = toJson_KubeRoleProps;
/**
 * Converts an object of type 'KubeRoleBindingProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeRoleBindingProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'roleRef': toJson_RoleRef(obj.roleRef),
        'subjects': (_a = obj.subjects) === null || _a === void 0 ? void 0 : _a.map(y => toJson_Subject(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeRoleBindingProps = toJson_KubeRoleBindingProps;
/**
 * Converts an object of type 'KubeRoleBindingListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeRoleBindingListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeRoleBindingProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeRoleBindingListProps = toJson_KubeRoleBindingListProps;
/**
 * Converts an object of type 'KubeRoleListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeRoleListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeRoleProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeRoleListProps = toJson_KubeRoleListProps;
/**
 * Converts an object of type 'KubeClusterRoleV1Alpha1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeClusterRoleV1Alpha1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'aggregationRule': toJson_AggregationRuleV1Alpha1(obj.aggregationRule),
        'metadata': toJson_ObjectMeta(obj.metadata),
        'rules': (_a = obj.rules) === null || _a === void 0 ? void 0 : _a.map(y => toJson_PolicyRuleV1Alpha1(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeClusterRoleV1Alpha1Props = toJson_KubeClusterRoleV1Alpha1Props;
/**
 * Converts an object of type 'KubeClusterRoleBindingV1Alpha1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeClusterRoleBindingV1Alpha1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'roleRef': toJson_RoleRefV1Alpha1(obj.roleRef),
        'subjects': (_a = obj.subjects) === null || _a === void 0 ? void 0 : _a.map(y => toJson_SubjectV1Alpha1(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeClusterRoleBindingV1Alpha1Props = toJson_KubeClusterRoleBindingV1Alpha1Props;
/**
 * Converts an object of type 'KubeClusterRoleBindingListV1Alpha1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeClusterRoleBindingListV1Alpha1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeClusterRoleBindingV1Alpha1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeClusterRoleBindingListV1Alpha1Props = toJson_KubeClusterRoleBindingListV1Alpha1Props;
/**
 * Converts an object of type 'KubeClusterRoleListV1Alpha1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeClusterRoleListV1Alpha1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeClusterRoleV1Alpha1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeClusterRoleListV1Alpha1Props = toJson_KubeClusterRoleListV1Alpha1Props;
/**
 * Converts an object of type 'KubeRoleV1Alpha1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeRoleV1Alpha1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'rules': (_a = obj.rules) === null || _a === void 0 ? void 0 : _a.map(y => toJson_PolicyRuleV1Alpha1(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeRoleV1Alpha1Props = toJson_KubeRoleV1Alpha1Props;
/**
 * Converts an object of type 'KubeRoleBindingV1Alpha1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeRoleBindingV1Alpha1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'roleRef': toJson_RoleRefV1Alpha1(obj.roleRef),
        'subjects': (_a = obj.subjects) === null || _a === void 0 ? void 0 : _a.map(y => toJson_SubjectV1Alpha1(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeRoleBindingV1Alpha1Props = toJson_KubeRoleBindingV1Alpha1Props;
/**
 * Converts an object of type 'KubeRoleBindingListV1Alpha1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeRoleBindingListV1Alpha1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeRoleBindingV1Alpha1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeRoleBindingListV1Alpha1Props = toJson_KubeRoleBindingListV1Alpha1Props;
/**
 * Converts an object of type 'KubeRoleListV1Alpha1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeRoleListV1Alpha1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeRoleV1Alpha1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeRoleListV1Alpha1Props = toJson_KubeRoleListV1Alpha1Props;
/**
 * Converts an object of type 'KubeClusterRoleV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeClusterRoleV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'aggregationRule': toJson_AggregationRuleV1Beta1(obj.aggregationRule),
        'metadata': toJson_ObjectMeta(obj.metadata),
        'rules': (_a = obj.rules) === null || _a === void 0 ? void 0 : _a.map(y => toJson_PolicyRuleV1Beta1(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeClusterRoleV1Beta1Props = toJson_KubeClusterRoleV1Beta1Props;
/**
 * Converts an object of type 'KubeClusterRoleBindingV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeClusterRoleBindingV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'roleRef': toJson_RoleRefV1Beta1(obj.roleRef),
        'subjects': (_a = obj.subjects) === null || _a === void 0 ? void 0 : _a.map(y => toJson_SubjectV1Beta1(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeClusterRoleBindingV1Beta1Props = toJson_KubeClusterRoleBindingV1Beta1Props;
/**
 * Converts an object of type 'KubeClusterRoleBindingListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeClusterRoleBindingListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeClusterRoleBindingV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeClusterRoleBindingListV1Beta1Props = toJson_KubeClusterRoleBindingListV1Beta1Props;
/**
 * Converts an object of type 'KubeClusterRoleListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeClusterRoleListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeClusterRoleV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeClusterRoleListV1Beta1Props = toJson_KubeClusterRoleListV1Beta1Props;
/**
 * Converts an object of type 'KubeRoleV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeRoleV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'rules': (_a = obj.rules) === null || _a === void 0 ? void 0 : _a.map(y => toJson_PolicyRuleV1Beta1(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeRoleV1Beta1Props = toJson_KubeRoleV1Beta1Props;
/**
 * Converts an object of type 'KubeRoleBindingV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeRoleBindingV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'roleRef': toJson_RoleRefV1Beta1(obj.roleRef),
        'subjects': (_a = obj.subjects) === null || _a === void 0 ? void 0 : _a.map(y => toJson_SubjectV1Beta1(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeRoleBindingV1Beta1Props = toJson_KubeRoleBindingV1Beta1Props;
/**
 * Converts an object of type 'KubeRoleBindingListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeRoleBindingListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeRoleBindingV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeRoleBindingListV1Beta1Props = toJson_KubeRoleBindingListV1Beta1Props;
/**
 * Converts an object of type 'KubeRoleListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeRoleListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeRoleV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeRoleListV1Beta1Props = toJson_KubeRoleListV1Beta1Props;
/**
 * Converts an object of type 'KubePriorityClassProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubePriorityClassProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'description': obj.description,
        'globalDefault': obj.globalDefault,
        'metadata': toJson_ObjectMeta(obj.metadata),
        'preemptionPolicy': obj.preemptionPolicy,
        'value': obj.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubePriorityClassProps = toJson_KubePriorityClassProps;
/**
 * Converts an object of type 'KubePriorityClassListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubePriorityClassListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubePriorityClassProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubePriorityClassListProps = toJson_KubePriorityClassListProps;
/**
 * Converts an object of type 'KubePriorityClassV1Alpha1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubePriorityClassV1Alpha1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'description': obj.description,
        'globalDefault': obj.globalDefault,
        'metadata': toJson_ObjectMeta(obj.metadata),
        'preemptionPolicy': obj.preemptionPolicy,
        'value': obj.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubePriorityClassV1Alpha1Props = toJson_KubePriorityClassV1Alpha1Props;
/**
 * Converts an object of type 'KubePriorityClassListV1Alpha1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubePriorityClassListV1Alpha1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubePriorityClassV1Alpha1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubePriorityClassListV1Alpha1Props = toJson_KubePriorityClassListV1Alpha1Props;
/**
 * Converts an object of type 'KubePriorityClassV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubePriorityClassV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'description': obj.description,
        'globalDefault': obj.globalDefault,
        'metadata': toJson_ObjectMeta(obj.metadata),
        'preemptionPolicy': obj.preemptionPolicy,
        'value': obj.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubePriorityClassV1Beta1Props = toJson_KubePriorityClassV1Beta1Props;
/**
 * Converts an object of type 'KubePriorityClassListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubePriorityClassListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubePriorityClassV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubePriorityClassListV1Beta1Props = toJson_KubePriorityClassListV1Beta1Props;
/**
 * Converts an object of type 'KubePodPresetV1Alpha1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubePodPresetV1Alpha1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_PodPresetSpecV1Alpha1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubePodPresetV1Alpha1Props = toJson_KubePodPresetV1Alpha1Props;
/**
 * Converts an object of type 'KubePodPresetListV1Alpha1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubePodPresetListV1Alpha1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubePodPresetV1Alpha1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubePodPresetListV1Alpha1Props = toJson_KubePodPresetListV1Alpha1Props;
/**
 * Converts an object of type 'KubeStorageClassProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeStorageClassProps(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'allowVolumeExpansion': obj.allowVolumeExpansion,
        'allowedTopologies': (_a = obj.allowedTopologies) === null || _a === void 0 ? void 0 : _a.map(y => toJson_TopologySelectorTerm(y)),
        'metadata': toJson_ObjectMeta(obj.metadata),
        'mountOptions': (_b = obj.mountOptions) === null || _b === void 0 ? void 0 : _b.map(y => y),
        'parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {})),
        'provisioner': obj.provisioner,
        'reclaimPolicy': obj.reclaimPolicy,
        'volumeBindingMode': obj.volumeBindingMode,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeStorageClassProps = toJson_KubeStorageClassProps;
/**
 * Converts an object of type 'KubeStorageClassListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeStorageClassListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeStorageClassProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeStorageClassListProps = toJson_KubeStorageClassListProps;
/**
 * Converts an object of type 'KubeVolumeAttachmentProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeVolumeAttachmentProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_VolumeAttachmentSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeVolumeAttachmentProps = toJson_KubeVolumeAttachmentProps;
/**
 * Converts an object of type 'KubeVolumeAttachmentListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeVolumeAttachmentListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeVolumeAttachmentProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeVolumeAttachmentListProps = toJson_KubeVolumeAttachmentListProps;
/**
 * Converts an object of type 'KubeVolumeAttachmentV1Alpha1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeVolumeAttachmentV1Alpha1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_VolumeAttachmentSpecV1Alpha1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeVolumeAttachmentV1Alpha1Props = toJson_KubeVolumeAttachmentV1Alpha1Props;
/**
 * Converts an object of type 'KubeVolumeAttachmentListV1Alpha1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeVolumeAttachmentListV1Alpha1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeVolumeAttachmentV1Alpha1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeVolumeAttachmentListV1Alpha1Props = toJson_KubeVolumeAttachmentListV1Alpha1Props;
/**
 * Converts an object of type 'KubeCsiDriverV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeCsiDriverV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_CsiDriverSpecV1Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeCsiDriverV1Beta1Props = toJson_KubeCsiDriverV1Beta1Props;
/**
 * Converts an object of type 'KubeCsiDriverListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeCsiDriverListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeCsiDriverV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeCsiDriverListV1Beta1Props = toJson_KubeCsiDriverListV1Beta1Props;
/**
 * Converts an object of type 'KubeCsiNodeV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeCsiNodeV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_CsiNodeSpecV1Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeCsiNodeV1Beta1Props = toJson_KubeCsiNodeV1Beta1Props;
/**
 * Converts an object of type 'KubeCsiNodeListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeCsiNodeListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeCsiNodeV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeCsiNodeListV1Beta1Props = toJson_KubeCsiNodeListV1Beta1Props;
/**
 * Converts an object of type 'KubeStorageClassV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeStorageClassV1Beta1Props(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'allowVolumeExpansion': obj.allowVolumeExpansion,
        'allowedTopologies': (_a = obj.allowedTopologies) === null || _a === void 0 ? void 0 : _a.map(y => toJson_TopologySelectorTerm(y)),
        'metadata': toJson_ObjectMeta(obj.metadata),
        'mountOptions': (_b = obj.mountOptions) === null || _b === void 0 ? void 0 : _b.map(y => y),
        'parameters': ((obj.parameters) === undefined) ? undefined : (Object.entries(obj.parameters).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {})),
        'provisioner': obj.provisioner,
        'reclaimPolicy': obj.reclaimPolicy,
        'volumeBindingMode': obj.volumeBindingMode,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeStorageClassV1Beta1Props = toJson_KubeStorageClassV1Beta1Props;
/**
 * Converts an object of type 'KubeStorageClassListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeStorageClassListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeStorageClassV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeStorageClassListV1Beta1Props = toJson_KubeStorageClassListV1Beta1Props;
/**
 * Converts an object of type 'KubeVolumeAttachmentV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeVolumeAttachmentV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_VolumeAttachmentSpecV1Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeVolumeAttachmentV1Beta1Props = toJson_KubeVolumeAttachmentV1Beta1Props;
/**
 * Converts an object of type 'KubeVolumeAttachmentListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeVolumeAttachmentListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeVolumeAttachmentV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeVolumeAttachmentListV1Beta1Props = toJson_KubeVolumeAttachmentListV1Beta1Props;
/**
 * Converts an object of type 'KubeCustomResourceDefinitionV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeCustomResourceDefinitionV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_CustomResourceDefinitionSpecV1Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeCustomResourceDefinitionV1Beta1Props = toJson_KubeCustomResourceDefinitionV1Beta1Props;
/**
 * Converts an object of type 'KubeCustomResourceDefinitionListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeCustomResourceDefinitionListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeCustomResourceDefinitionV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeCustomResourceDefinitionListV1Beta1Props = toJson_KubeCustomResourceDefinitionListV1Beta1Props;
/**
 * Converts an object of type 'KubeStatusProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeStatusProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'code': obj.code,
        'details': toJson_StatusDetails(obj.details),
        'message': obj.message,
        'metadata': toJson_ListMeta(obj.metadata),
        'reason': obj.reason,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeStatusProps = toJson_KubeStatusProps;
/**
 * Converts an object of type 'KubeApiServiceProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeApiServiceProps(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_ApiServiceSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeApiServiceProps = toJson_KubeApiServiceProps;
/**
 * Converts an object of type 'KubeApiServiceListProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeApiServiceListProps(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeApiServiceProps(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeApiServiceListProps = toJson_KubeApiServiceListProps;
/**
 * Converts an object of type 'KubeApiServiceV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeApiServiceV1Beta1Props(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_ApiServiceSpecV1Beta1(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeApiServiceV1Beta1Props = toJson_KubeApiServiceV1Beta1Props;
/**
 * Converts an object of type 'KubeApiServiceListV1Beta1Props' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KubeApiServiceListV1Beta1Props(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubeApiServiceV1Beta1Props(y)),
        'metadata': toJson_ListMeta(obj.metadata),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KubeApiServiceListV1Beta1Props = toJson_KubeApiServiceListV1Beta1Props;
/**
 * Converts an object of type 'ObjectMeta' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ObjectMeta(obj) {
    var _a, _b, _c, _d, _e;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'annotations': ((obj.annotations) === undefined) ? undefined : (Object.entries(obj.annotations).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {})),
        'clusterName': obj.clusterName,
        'creationTimestamp': (_a = obj.creationTimestamp) === null || _a === void 0 ? void 0 : _a.toISOString(),
        'deletionGracePeriodSeconds': obj.deletionGracePeriodSeconds,
        'deletionTimestamp': (_b = obj.deletionTimestamp) === null || _b === void 0 ? void 0 : _b.toISOString(),
        'finalizers': (_c = obj.finalizers) === null || _c === void 0 ? void 0 : _c.map(y => y),
        'generateName': obj.generateName,
        'generation': obj.generation,
        'initializers': toJson_Initializers(obj.initializers),
        'labels': ((obj.labels) === undefined) ? undefined : (Object.entries(obj.labels).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {})),
        'managedFields': (_d = obj.managedFields) === null || _d === void 0 ? void 0 : _d.map(y => toJson_ManagedFieldsEntry(y)),
        'name': obj.name,
        'namespace': obj.namespace,
        'ownerReferences': (_e = obj.ownerReferences) === null || _e === void 0 ? void 0 : _e.map(y => toJson_OwnerReference(y)),
        'resourceVersion': obj.resourceVersion,
        'selfLink': obj.selfLink,
        'uid': obj.uid,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ObjectMeta = toJson_ObjectMeta;
/**
 * Converts an object of type 'MutatingWebhookV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_MutatingWebhookV1Beta1(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'admissionReviewVersions': (_a = obj.admissionReviewVersions) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'clientConfig': toJson_WebhookClientConfigV1Beta1(obj.clientConfig),
        'failurePolicy': obj.failurePolicy,
        'matchPolicy': obj.matchPolicy,
        'name': obj.name,
        'namespaceSelector': toJson_LabelSelector(obj.namespaceSelector),
        'objectSelector': toJson_LabelSelector(obj.objectSelector),
        'reinvocationPolicy': obj.reinvocationPolicy,
        'rules': (_b = obj.rules) === null || _b === void 0 ? void 0 : _b.map(y => toJson_RuleWithOperationsV1Beta1(y)),
        'sideEffects': obj.sideEffects,
        'timeoutSeconds': obj.timeoutSeconds,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_MutatingWebhookV1Beta1 = toJson_MutatingWebhookV1Beta1;
/**
 * Converts an object of type 'ListMeta' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ListMeta(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'continue': obj.continue,
        'remainingItemCount': obj.remainingItemCount,
        'resourceVersion': obj.resourceVersion,
        'selfLink': obj.selfLink,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ListMeta = toJson_ListMeta;
/**
 * Converts an object of type 'ValidatingWebhookV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ValidatingWebhookV1Beta1(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'admissionReviewVersions': (_a = obj.admissionReviewVersions) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'clientConfig': toJson_WebhookClientConfigV1Beta1(obj.clientConfig),
        'failurePolicy': obj.failurePolicy,
        'matchPolicy': obj.matchPolicy,
        'name': obj.name,
        'namespaceSelector': toJson_LabelSelector(obj.namespaceSelector),
        'objectSelector': toJson_LabelSelector(obj.objectSelector),
        'rules': (_b = obj.rules) === null || _b === void 0 ? void 0 : _b.map(y => toJson_RuleWithOperationsV1Beta1(y)),
        'sideEffects': obj.sideEffects,
        'timeoutSeconds': obj.timeoutSeconds,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ValidatingWebhookV1Beta1 = toJson_ValidatingWebhookV1Beta1;
/**
 * Converts an object of type 'RawExtension' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_RawExtension(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'Raw': obj.raw,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_RawExtension = toJson_RawExtension;
/**
 * Converts an object of type 'DaemonSetSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_DaemonSetSpec(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'minReadySeconds': obj.minReadySeconds,
        'revisionHistoryLimit': obj.revisionHistoryLimit,
        'selector': toJson_LabelSelector(obj.selector),
        'template': toJson_PodTemplateSpec(obj.template),
        'updateStrategy': toJson_DaemonSetUpdateStrategy(obj.updateStrategy),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_DaemonSetSpec = toJson_DaemonSetSpec;
/**
 * Converts an object of type 'DeploymentSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_DeploymentSpec(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'minReadySeconds': obj.minReadySeconds,
        'paused': obj.paused,
        'progressDeadlineSeconds': obj.progressDeadlineSeconds,
        'replicas': obj.replicas,
        'revisionHistoryLimit': obj.revisionHistoryLimit,
        'selector': toJson_LabelSelector(obj.selector),
        'strategy': toJson_DeploymentStrategy(obj.strategy),
        'template': toJson_PodTemplateSpec(obj.template),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_DeploymentSpec = toJson_DeploymentSpec;
/**
 * Converts an object of type 'ReplicaSetSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ReplicaSetSpec(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'minReadySeconds': obj.minReadySeconds,
        'replicas': obj.replicas,
        'selector': toJson_LabelSelector(obj.selector),
        'template': toJson_PodTemplateSpec(obj.template),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ReplicaSetSpec = toJson_ReplicaSetSpec;
/**
 * Converts an object of type 'StatefulSetSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_StatefulSetSpec(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'podManagementPolicy': obj.podManagementPolicy,
        'replicas': obj.replicas,
        'revisionHistoryLimit': obj.revisionHistoryLimit,
        'selector': toJson_LabelSelector(obj.selector),
        'serviceName': obj.serviceName,
        'template': toJson_PodTemplateSpec(obj.template),
        'updateStrategy': toJson_StatefulSetUpdateStrategy(obj.updateStrategy),
        'volumeClaimTemplates': (_a = obj.volumeClaimTemplates) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubePersistentVolumeClaimProps(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_StatefulSetSpec = toJson_StatefulSetSpec;
/**
 * Converts an object of type 'DeploymentSpecV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_DeploymentSpecV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'minReadySeconds': obj.minReadySeconds,
        'paused': obj.paused,
        'progressDeadlineSeconds': obj.progressDeadlineSeconds,
        'replicas': obj.replicas,
        'revisionHistoryLimit': obj.revisionHistoryLimit,
        'rollbackTo': toJson_RollbackConfigV1Beta1(obj.rollbackTo),
        'selector': toJson_LabelSelector(obj.selector),
        'strategy': toJson_DeploymentStrategyV1Beta1(obj.strategy),
        'template': toJson_PodTemplateSpec(obj.template),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_DeploymentSpecV1Beta1 = toJson_DeploymentSpecV1Beta1;
/**
 * Converts an object of type 'ScaleSpecV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ScaleSpecV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'replicas': obj.replicas,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ScaleSpecV1Beta1 = toJson_ScaleSpecV1Beta1;
/**
 * Converts an object of type 'StatefulSetSpecV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_StatefulSetSpecV1Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'podManagementPolicy': obj.podManagementPolicy,
        'replicas': obj.replicas,
        'revisionHistoryLimit': obj.revisionHistoryLimit,
        'selector': toJson_LabelSelector(obj.selector),
        'serviceName': obj.serviceName,
        'template': toJson_PodTemplateSpec(obj.template),
        'updateStrategy': toJson_StatefulSetUpdateStrategyV1Beta1(obj.updateStrategy),
        'volumeClaimTemplates': (_a = obj.volumeClaimTemplates) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubePersistentVolumeClaimProps(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_StatefulSetSpecV1Beta1 = toJson_StatefulSetSpecV1Beta1;
/**
 * Converts an object of type 'DaemonSetSpecV1Beta2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_DaemonSetSpecV1Beta2(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'minReadySeconds': obj.minReadySeconds,
        'revisionHistoryLimit': obj.revisionHistoryLimit,
        'selector': toJson_LabelSelector(obj.selector),
        'template': toJson_PodTemplateSpec(obj.template),
        'updateStrategy': toJson_DaemonSetUpdateStrategyV1Beta2(obj.updateStrategy),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_DaemonSetSpecV1Beta2 = toJson_DaemonSetSpecV1Beta2;
/**
 * Converts an object of type 'DeploymentSpecV1Beta2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_DeploymentSpecV1Beta2(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'minReadySeconds': obj.minReadySeconds,
        'paused': obj.paused,
        'progressDeadlineSeconds': obj.progressDeadlineSeconds,
        'replicas': obj.replicas,
        'revisionHistoryLimit': obj.revisionHistoryLimit,
        'selector': toJson_LabelSelector(obj.selector),
        'strategy': toJson_DeploymentStrategyV1Beta2(obj.strategy),
        'template': toJson_PodTemplateSpec(obj.template),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_DeploymentSpecV1Beta2 = toJson_DeploymentSpecV1Beta2;
/**
 * Converts an object of type 'ReplicaSetSpecV1Beta2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ReplicaSetSpecV1Beta2(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'minReadySeconds': obj.minReadySeconds,
        'replicas': obj.replicas,
        'selector': toJson_LabelSelector(obj.selector),
        'template': toJson_PodTemplateSpec(obj.template),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ReplicaSetSpecV1Beta2 = toJson_ReplicaSetSpecV1Beta2;
/**
 * Converts an object of type 'ScaleSpecV1Beta2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ScaleSpecV1Beta2(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'replicas': obj.replicas,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ScaleSpecV1Beta2 = toJson_ScaleSpecV1Beta2;
/**
 * Converts an object of type 'StatefulSetSpecV1Beta2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_StatefulSetSpecV1Beta2(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'podManagementPolicy': obj.podManagementPolicy,
        'replicas': obj.replicas,
        'revisionHistoryLimit': obj.revisionHistoryLimit,
        'selector': toJson_LabelSelector(obj.selector),
        'serviceName': obj.serviceName,
        'template': toJson_PodTemplateSpec(obj.template),
        'updateStrategy': toJson_StatefulSetUpdateStrategyV1Beta2(obj.updateStrategy),
        'volumeClaimTemplates': (_a = obj.volumeClaimTemplates) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KubePersistentVolumeClaimProps(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_StatefulSetSpecV1Beta2 = toJson_StatefulSetSpecV1Beta2;
/**
 * Converts an object of type 'AuditSinkSpecV1Alpha1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_AuditSinkSpecV1Alpha1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'policy': toJson_PolicyV1Alpha1(obj.policy),
        'webhook': toJson_WebhookV1Alpha1(obj.webhook),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_AuditSinkSpecV1Alpha1 = toJson_AuditSinkSpecV1Alpha1;
/**
 * Converts an object of type 'TokenReviewSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_TokenReviewSpec(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'audiences': (_a = obj.audiences) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'token': obj.token,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_TokenReviewSpec = toJson_TokenReviewSpec;
/**
 * Converts an object of type 'TokenReviewSpecV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_TokenReviewSpecV1Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'audiences': (_a = obj.audiences) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'token': obj.token,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_TokenReviewSpecV1Beta1 = toJson_TokenReviewSpecV1Beta1;
/**
 * Converts an object of type 'SubjectAccessReviewSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_SubjectAccessReviewSpec(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'extra': ((obj.extra) === undefined) ? undefined : (Object.entries(obj.extra).reduce((r, i) => { var _a; return (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: (_a = i[1]) === null || _a === void 0 ? void 0 : _a.map(y => y) })); }, {})),
        'groups': (_a = obj.groups) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'nonResourceAttributes': toJson_NonResourceAttributes(obj.nonResourceAttributes),
        'resourceAttributes': toJson_ResourceAttributes(obj.resourceAttributes),
        'uid': obj.uid,
        'user': obj.user,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_SubjectAccessReviewSpec = toJson_SubjectAccessReviewSpec;
/**
 * Converts an object of type 'SelfSubjectAccessReviewSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_SelfSubjectAccessReviewSpec(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'nonResourceAttributes': toJson_NonResourceAttributes(obj.nonResourceAttributes),
        'resourceAttributes': toJson_ResourceAttributes(obj.resourceAttributes),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_SelfSubjectAccessReviewSpec = toJson_SelfSubjectAccessReviewSpec;
/**
 * Converts an object of type 'SelfSubjectRulesReviewSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_SelfSubjectRulesReviewSpec(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'namespace': obj.namespace,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_SelfSubjectRulesReviewSpec = toJson_SelfSubjectRulesReviewSpec;
/**
 * Converts an object of type 'SubjectAccessReviewSpecV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_SubjectAccessReviewSpecV1Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'extra': ((obj.extra) === undefined) ? undefined : (Object.entries(obj.extra).reduce((r, i) => { var _a; return (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: (_a = i[1]) === null || _a === void 0 ? void 0 : _a.map(y => y) })); }, {})),
        'group': (_a = obj.group) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'nonResourceAttributes': toJson_NonResourceAttributesV1Beta1(obj.nonResourceAttributes),
        'resourceAttributes': toJson_ResourceAttributesV1Beta1(obj.resourceAttributes),
        'uid': obj.uid,
        'user': obj.user,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_SubjectAccessReviewSpecV1Beta1 = toJson_SubjectAccessReviewSpecV1Beta1;
/**
 * Converts an object of type 'SelfSubjectAccessReviewSpecV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_SelfSubjectAccessReviewSpecV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'nonResourceAttributes': toJson_NonResourceAttributesV1Beta1(obj.nonResourceAttributes),
        'resourceAttributes': toJson_ResourceAttributesV1Beta1(obj.resourceAttributes),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_SelfSubjectAccessReviewSpecV1Beta1 = toJson_SelfSubjectAccessReviewSpecV1Beta1;
/**
 * Converts an object of type 'SelfSubjectRulesReviewSpecV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_SelfSubjectRulesReviewSpecV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'namespace': obj.namespace,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_SelfSubjectRulesReviewSpecV1Beta1 = toJson_SelfSubjectRulesReviewSpecV1Beta1;
/**
 * Converts an object of type 'HorizontalPodAutoscalerSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_HorizontalPodAutoscalerSpec(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'maxReplicas': obj.maxReplicas,
        'minReplicas': obj.minReplicas,
        'scaleTargetRef': toJson_CrossVersionObjectReference(obj.scaleTargetRef),
        'targetCPUUtilizationPercentage': obj.targetCpuUtilizationPercentage,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_HorizontalPodAutoscalerSpec = toJson_HorizontalPodAutoscalerSpec;
/**
 * Converts an object of type 'ScaleSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ScaleSpec(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'replicas': obj.replicas,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ScaleSpec = toJson_ScaleSpec;
/**
 * Converts an object of type 'HorizontalPodAutoscalerSpecV2Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_HorizontalPodAutoscalerSpecV2Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'maxReplicas': obj.maxReplicas,
        'metrics': (_a = obj.metrics) === null || _a === void 0 ? void 0 : _a.map(y => toJson_MetricSpecV2Beta1(y)),
        'minReplicas': obj.minReplicas,
        'scaleTargetRef': toJson_CrossVersionObjectReferenceV2Beta1(obj.scaleTargetRef),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_HorizontalPodAutoscalerSpecV2Beta1 = toJson_HorizontalPodAutoscalerSpecV2Beta1;
/**
 * Converts an object of type 'HorizontalPodAutoscalerSpecV2Beta2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_HorizontalPodAutoscalerSpecV2Beta2(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'maxReplicas': obj.maxReplicas,
        'metrics': (_a = obj.metrics) === null || _a === void 0 ? void 0 : _a.map(y => toJson_MetricSpecV2Beta2(y)),
        'minReplicas': obj.minReplicas,
        'scaleTargetRef': toJson_CrossVersionObjectReferenceV2Beta2(obj.scaleTargetRef),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_HorizontalPodAutoscalerSpecV2Beta2 = toJson_HorizontalPodAutoscalerSpecV2Beta2;
/**
 * Converts an object of type 'JobSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_JobSpec(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'activeDeadlineSeconds': obj.activeDeadlineSeconds,
        'backoffLimit': obj.backoffLimit,
        'completions': obj.completions,
        'manualSelector': obj.manualSelector,
        'parallelism': obj.parallelism,
        'selector': toJson_LabelSelector(obj.selector),
        'template': toJson_PodTemplateSpec(obj.template),
        'ttlSecondsAfterFinished': obj.ttlSecondsAfterFinished,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_JobSpec = toJson_JobSpec;
/**
 * Converts an object of type 'CronJobSpecV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CronJobSpecV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'concurrencyPolicy': obj.concurrencyPolicy,
        'failedJobsHistoryLimit': obj.failedJobsHistoryLimit,
        'jobTemplate': toJson_JobTemplateSpecV1Beta1(obj.jobTemplate),
        'schedule': obj.schedule,
        'startingDeadlineSeconds': obj.startingDeadlineSeconds,
        'successfulJobsHistoryLimit': obj.successfulJobsHistoryLimit,
        'suspend': obj.suspend,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CronJobSpecV1Beta1 = toJson_CronJobSpecV1Beta1;
/**
 * Converts an object of type 'CronJobSpecV2Alpha1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CronJobSpecV2Alpha1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'concurrencyPolicy': obj.concurrencyPolicy,
        'failedJobsHistoryLimit': obj.failedJobsHistoryLimit,
        'jobTemplate': toJson_JobTemplateSpecV2Alpha1(obj.jobTemplate),
        'schedule': obj.schedule,
        'startingDeadlineSeconds': obj.startingDeadlineSeconds,
        'successfulJobsHistoryLimit': obj.successfulJobsHistoryLimit,
        'suspend': obj.suspend,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CronJobSpecV2Alpha1 = toJson_CronJobSpecV2Alpha1;
/**
 * Converts an object of type 'CertificateSigningRequestSpecV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CertificateSigningRequestSpecV1Beta1(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'extra': ((obj.extra) === undefined) ? undefined : (Object.entries(obj.extra).reduce((r, i) => { var _a; return (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: (_a = i[1]) === null || _a === void 0 ? void 0 : _a.map(y => y) })); }, {})),
        'groups': (_a = obj.groups) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'request': obj.request,
        'uid': obj.uid,
        'usages': (_b = obj.usages) === null || _b === void 0 ? void 0 : _b.map(y => y),
        'username': obj.username,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CertificateSigningRequestSpecV1Beta1 = toJson_CertificateSigningRequestSpecV1Beta1;
/**
 * Converts an object of type 'LeaseSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_LeaseSpec(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'acquireTime': (_a = obj.acquireTime) === null || _a === void 0 ? void 0 : _a.toISOString(),
        'holderIdentity': obj.holderIdentity,
        'leaseDurationSeconds': obj.leaseDurationSeconds,
        'leaseTransitions': obj.leaseTransitions,
        'renewTime': (_b = obj.renewTime) === null || _b === void 0 ? void 0 : _b.toISOString(),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_LeaseSpec = toJson_LeaseSpec;
/**
 * Converts an object of type 'LeaseSpecV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_LeaseSpecV1Beta1(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'acquireTime': (_a = obj.acquireTime) === null || _a === void 0 ? void 0 : _a.toISOString(),
        'holderIdentity': obj.holderIdentity,
        'leaseDurationSeconds': obj.leaseDurationSeconds,
        'leaseTransitions': obj.leaseTransitions,
        'renewTime': (_b = obj.renewTime) === null || _b === void 0 ? void 0 : _b.toISOString(),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_LeaseSpecV1Beta1 = toJson_LeaseSpecV1Beta1;
/**
 * Converts an object of type 'ObjectReference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ObjectReference(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'apiVersion': obj.apiVersion,
        'fieldPath': obj.fieldPath,
        'kind': obj.kind,
        'name': obj.name,
        'namespace': obj.namespace,
        'resourceVersion': obj.resourceVersion,
        'uid': obj.uid,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ObjectReference = toJson_ObjectReference;
/**
 * Converts an object of type 'ComponentCondition' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ComponentCondition(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'error': obj.error,
        'message': obj.message,
        'status': obj.status,
        'type': obj.type,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ComponentCondition = toJson_ComponentCondition;
/**
 * Converts an object of type 'EndpointSubset' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_EndpointSubset(obj) {
    var _a, _b, _c;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'addresses': (_a = obj.addresses) === null || _a === void 0 ? void 0 : _a.map(y => toJson_EndpointAddress(y)),
        'notReadyAddresses': (_b = obj.notReadyAddresses) === null || _b === void 0 ? void 0 : _b.map(y => toJson_EndpointAddress(y)),
        'ports': (_c = obj.ports) === null || _c === void 0 ? void 0 : _c.map(y => toJson_EndpointPort(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_EndpointSubset = toJson_EndpointSubset;
/**
 * Converts an object of type 'EventSeries' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_EventSeries(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'count': obj.count,
        'lastObservedTime': (_a = obj.lastObservedTime) === null || _a === void 0 ? void 0 : _a.toISOString(),
        'state': obj.state,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_EventSeries = toJson_EventSeries;
/**
 * Converts an object of type 'EventSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_EventSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'component': obj.component,
        'host': obj.host,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_EventSource = toJson_EventSource;
/**
 * Converts an object of type 'LimitRangeSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_LimitRangeSpec(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'limits': (_a = obj.limits) === null || _a === void 0 ? void 0 : _a.map(y => toJson_LimitRangeItem(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_LimitRangeSpec = toJson_LimitRangeSpec;
/**
 * Converts an object of type 'NamespaceSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_NamespaceSpec(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'finalizers': (_a = obj.finalizers) === null || _a === void 0 ? void 0 : _a.map(y => y),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_NamespaceSpec = toJson_NamespaceSpec;
/**
 * Converts an object of type 'NodeSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_NodeSpec(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'configSource': toJson_NodeConfigSource(obj.configSource),
        'externalID': obj.externalId,
        'podCIDR': obj.podCidr,
        'providerID': obj.providerId,
        'taints': (_a = obj.taints) === null || _a === void 0 ? void 0 : _a.map(y => toJson_Taint(y)),
        'unschedulable': obj.unschedulable,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_NodeSpec = toJson_NodeSpec;
/**
 * Converts an object of type 'PersistentVolumeSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PersistentVolumeSpec(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'accessModes': (_a = obj.accessModes) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'awsElasticBlockStore': toJson_AwsElasticBlockStoreVolumeSource(obj.awsElasticBlockStore),
        'azureDisk': toJson_AzureDiskVolumeSource(obj.azureDisk),
        'azureFile': toJson_AzureFilePersistentVolumeSource(obj.azureFile),
        'capacity': ((obj.capacity) === undefined) ? undefined : (Object.entries(obj.capacity).reduce((r, i) => { var _a; return (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: (_a = i[1]) === null || _a === void 0 ? void 0 : _a.value })); }, {})),
        'cephfs': toJson_CephFsPersistentVolumeSource(obj.cephfs),
        'cinder': toJson_CinderPersistentVolumeSource(obj.cinder),
        'claimRef': toJson_ObjectReference(obj.claimRef),
        'csi': toJson_CsiPersistentVolumeSource(obj.csi),
        'fc': toJson_FcVolumeSource(obj.fc),
        'flexVolume': toJson_FlexPersistentVolumeSource(obj.flexVolume),
        'flocker': toJson_FlockerVolumeSource(obj.flocker),
        'gcePersistentDisk': toJson_GcePersistentDiskVolumeSource(obj.gcePersistentDisk),
        'glusterfs': toJson_GlusterfsPersistentVolumeSource(obj.glusterfs),
        'hostPath': toJson_HostPathVolumeSource(obj.hostPath),
        'iscsi': toJson_IscsiPersistentVolumeSource(obj.iscsi),
        'local': toJson_LocalVolumeSource(obj.local),
        'mountOptions': (_b = obj.mountOptions) === null || _b === void 0 ? void 0 : _b.map(y => y),
        'nfs': toJson_NfsVolumeSource(obj.nfs),
        'nodeAffinity': toJson_VolumeNodeAffinity(obj.nodeAffinity),
        'persistentVolumeReclaimPolicy': obj.persistentVolumeReclaimPolicy,
        'photonPersistentDisk': toJson_PhotonPersistentDiskVolumeSource(obj.photonPersistentDisk),
        'portworxVolume': toJson_PortworxVolumeSource(obj.portworxVolume),
        'quobyte': toJson_QuobyteVolumeSource(obj.quobyte),
        'rbd': toJson_RbdPersistentVolumeSource(obj.rbd),
        'scaleIO': toJson_ScaleIoPersistentVolumeSource(obj.scaleIo),
        'storageClassName': obj.storageClassName,
        'storageos': toJson_StorageOsPersistentVolumeSource(obj.storageos),
        'volumeMode': obj.volumeMode,
        'vsphereVolume': toJson_VsphereVirtualDiskVolumeSource(obj.vsphereVolume),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PersistentVolumeSpec = toJson_PersistentVolumeSpec;
/**
 * Converts an object of type 'PersistentVolumeClaimSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PersistentVolumeClaimSpec(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'accessModes': (_a = obj.accessModes) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'dataSource': toJson_TypedLocalObjectReference(obj.dataSource),
        'resources': toJson_ResourceRequirements(obj.resources),
        'selector': toJson_LabelSelector(obj.selector),
        'storageClassName': obj.storageClassName,
        'volumeMode': obj.volumeMode,
        'volumeName': obj.volumeName,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PersistentVolumeClaimSpec = toJson_PersistentVolumeClaimSpec;
/**
 * Converts an object of type 'PodSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PodSpec(obj) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'activeDeadlineSeconds': obj.activeDeadlineSeconds,
        'affinity': toJson_Affinity(obj.affinity),
        'automountServiceAccountToken': obj.automountServiceAccountToken,
        'containers': (_a = obj.containers) === null || _a === void 0 ? void 0 : _a.map(y => toJson_Container(y)),
        'dnsConfig': toJson_PodDnsConfig(obj.dnsConfig),
        'dnsPolicy': obj.dnsPolicy,
        'enableServiceLinks': obj.enableServiceLinks,
        'hostAliases': (_b = obj.hostAliases) === null || _b === void 0 ? void 0 : _b.map(y => toJson_HostAlias(y)),
        'hostIPC': obj.hostIpc,
        'hostNetwork': obj.hostNetwork,
        'hostPID': obj.hostPid,
        'hostname': obj.hostname,
        'imagePullSecrets': (_c = obj.imagePullSecrets) === null || _c === void 0 ? void 0 : _c.map(y => toJson_LocalObjectReference(y)),
        'initContainers': (_d = obj.initContainers) === null || _d === void 0 ? void 0 : _d.map(y => toJson_Container(y)),
        'nodeName': obj.nodeName,
        'nodeSelector': ((obj.nodeSelector) === undefined) ? undefined : (Object.entries(obj.nodeSelector).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {})),
        'preemptionPolicy': obj.preemptionPolicy,
        'priority': obj.priority,
        'priorityClassName': obj.priorityClassName,
        'readinessGates': (_e = obj.readinessGates) === null || _e === void 0 ? void 0 : _e.map(y => toJson_PodReadinessGate(y)),
        'restartPolicy': obj.restartPolicy,
        'runtimeClassName': obj.runtimeClassName,
        'schedulerName': obj.schedulerName,
        'securityContext': toJson_PodSecurityContext(obj.securityContext),
        'serviceAccount': obj.serviceAccount,
        'serviceAccountName': obj.serviceAccountName,
        'shareProcessNamespace': obj.shareProcessNamespace,
        'subdomain': obj.subdomain,
        'terminationGracePeriodSeconds': obj.terminationGracePeriodSeconds,
        'tolerations': (_f = obj.tolerations) === null || _f === void 0 ? void 0 : _f.map(y => toJson_Toleration(y)),
        'volumes': (_g = obj.volumes) === null || _g === void 0 ? void 0 : _g.map(y => toJson_Volume(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PodSpec = toJson_PodSpec;
/**
 * Converts an object of type 'PodTemplateSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PodTemplateSpec(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_PodSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PodTemplateSpec = toJson_PodTemplateSpec;
/**
 * Converts an object of type 'ReplicationControllerSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ReplicationControllerSpec(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'minReadySeconds': obj.minReadySeconds,
        'replicas': obj.replicas,
        'selector': ((obj.selector) === undefined) ? undefined : (Object.entries(obj.selector).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {})),
        'template': toJson_PodTemplateSpec(obj.template),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ReplicationControllerSpec = toJson_ReplicationControllerSpec;
/**
 * Converts an object of type 'ResourceQuotaSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ResourceQuotaSpec(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'hard': ((obj.hard) === undefined) ? undefined : (Object.entries(obj.hard).reduce((r, i) => { var _a; return (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: (_a = i[1]) === null || _a === void 0 ? void 0 : _a.value })); }, {})),
        'scopeSelector': toJson_ScopeSelector(obj.scopeSelector),
        'scopes': (_a = obj.scopes) === null || _a === void 0 ? void 0 : _a.map(y => y),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ResourceQuotaSpec = toJson_ResourceQuotaSpec;
/**
 * Converts an object of type 'ServiceSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ServiceSpec(obj) {
    var _a, _b, _c;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'clusterIP': obj.clusterIp,
        'externalIPs': (_a = obj.externalIPs) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'externalName': obj.externalName,
        'externalTrafficPolicy': obj.externalTrafficPolicy,
        'healthCheckNodePort': obj.healthCheckNodePort,
        'loadBalancerIP': obj.loadBalancerIp,
        'loadBalancerSourceRanges': (_b = obj.loadBalancerSourceRanges) === null || _b === void 0 ? void 0 : _b.map(y => y),
        'ports': (_c = obj.ports) === null || _c === void 0 ? void 0 : _c.map(y => toJson_ServicePort(y)),
        'publishNotReadyAddresses': obj.publishNotReadyAddresses,
        'selector': ((obj.selector) === undefined) ? undefined : (Object.entries(obj.selector).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {})),
        'sessionAffinity': obj.sessionAffinity,
        'sessionAffinityConfig': toJson_SessionAffinityConfig(obj.sessionAffinityConfig),
        'type': obj.type,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ServiceSpec = toJson_ServiceSpec;
/**
 * Converts an object of type 'LocalObjectReference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_LocalObjectReference(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'name': obj.name,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_LocalObjectReference = toJson_LocalObjectReference;
/**
 * Converts an object of type 'EventSeriesV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_EventSeriesV1Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'count': obj.count,
        'lastObservedTime': (_a = obj.lastObservedTime) === null || _a === void 0 ? void 0 : _a.toISOString(),
        'state': obj.state,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_EventSeriesV1Beta1 = toJson_EventSeriesV1Beta1;
/**
 * Converts an object of type 'DaemonSetSpecV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_DaemonSetSpecV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'minReadySeconds': obj.minReadySeconds,
        'revisionHistoryLimit': obj.revisionHistoryLimit,
        'selector': toJson_LabelSelector(obj.selector),
        'template': toJson_PodTemplateSpec(obj.template),
        'templateGeneration': obj.templateGeneration,
        'updateStrategy': toJson_DaemonSetUpdateStrategyV1Beta1(obj.updateStrategy),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_DaemonSetSpecV1Beta1 = toJson_DaemonSetSpecV1Beta1;
/**
 * Converts an object of type 'IngressSpecV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_IngressSpecV1Beta1(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'backend': toJson_IngressBackendV1Beta1(obj.backend),
        'rules': (_a = obj.rules) === null || _a === void 0 ? void 0 : _a.map(y => toJson_IngressRuleV1Beta1(y)),
        'tls': (_b = obj.tls) === null || _b === void 0 ? void 0 : _b.map(y => toJson_IngressTlsv1Beta1(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_IngressSpecV1Beta1 = toJson_IngressSpecV1Beta1;
/**
 * Converts an object of type 'NetworkPolicySpecV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_NetworkPolicySpecV1Beta1(obj) {
    var _a, _b, _c;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'egress': (_a = obj.egress) === null || _a === void 0 ? void 0 : _a.map(y => toJson_NetworkPolicyEgressRuleV1Beta1(y)),
        'ingress': (_b = obj.ingress) === null || _b === void 0 ? void 0 : _b.map(y => toJson_NetworkPolicyIngressRuleV1Beta1(y)),
        'podSelector': toJson_LabelSelector(obj.podSelector),
        'policyTypes': (_c = obj.policyTypes) === null || _c === void 0 ? void 0 : _c.map(y => y),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_NetworkPolicySpecV1Beta1 = toJson_NetworkPolicySpecV1Beta1;
/**
 * Converts an object of type 'PodSecurityPolicySpecV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PodSecurityPolicySpecV1Beta1(obj) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'allowPrivilegeEscalation': obj.allowPrivilegeEscalation,
        'allowedCSIDrivers': (_a = obj.allowedCsiDrivers) === null || _a === void 0 ? void 0 : _a.map(y => toJson_AllowedCsiDriverV1Beta1(y)),
        'allowedCapabilities': (_b = obj.allowedCapabilities) === null || _b === void 0 ? void 0 : _b.map(y => y),
        'allowedFlexVolumes': (_c = obj.allowedFlexVolumes) === null || _c === void 0 ? void 0 : _c.map(y => toJson_AllowedFlexVolumeV1Beta1(y)),
        'allowedHostPaths': (_d = obj.allowedHostPaths) === null || _d === void 0 ? void 0 : _d.map(y => toJson_AllowedHostPathV1Beta1(y)),
        'allowedProcMountTypes': (_e = obj.allowedProcMountTypes) === null || _e === void 0 ? void 0 : _e.map(y => y),
        'allowedUnsafeSysctls': (_f = obj.allowedUnsafeSysctls) === null || _f === void 0 ? void 0 : _f.map(y => y),
        'defaultAddCapabilities': (_g = obj.defaultAddCapabilities) === null || _g === void 0 ? void 0 : _g.map(y => y),
        'defaultAllowPrivilegeEscalation': obj.defaultAllowPrivilegeEscalation,
        'forbiddenSysctls': (_h = obj.forbiddenSysctls) === null || _h === void 0 ? void 0 : _h.map(y => y),
        'fsGroup': toJson_FsGroupStrategyOptionsV1Beta1(obj.fsGroup),
        'hostIPC': obj.hostIpc,
        'hostNetwork': obj.hostNetwork,
        'hostPID': obj.hostPid,
        'hostPorts': (_j = obj.hostPorts) === null || _j === void 0 ? void 0 : _j.map(y => toJson_HostPortRangeV1Beta1(y)),
        'privileged': obj.privileged,
        'readOnlyRootFilesystem': obj.readOnlyRootFilesystem,
        'requiredDropCapabilities': (_k = obj.requiredDropCapabilities) === null || _k === void 0 ? void 0 : _k.map(y => y),
        'runAsGroup': toJson_RunAsGroupStrategyOptionsV1Beta1(obj.runAsGroup),
        'runAsUser': toJson_RunAsUserStrategyOptionsV1Beta1(obj.runAsUser),
        'runtimeClass': toJson_RuntimeClassStrategyOptionsV1Beta1(obj.runtimeClass),
        'seLinux': toJson_SeLinuxStrategyOptionsV1Beta1(obj.seLinux),
        'supplementalGroups': toJson_SupplementalGroupsStrategyOptionsV1Beta1(obj.supplementalGroups),
        'volumes': (_l = obj.volumes) === null || _l === void 0 ? void 0 : _l.map(y => y),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PodSecurityPolicySpecV1Beta1 = toJson_PodSecurityPolicySpecV1Beta1;
/**
 * Converts an object of type 'ReplicaSetSpecV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ReplicaSetSpecV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'minReadySeconds': obj.minReadySeconds,
        'replicas': obj.replicas,
        'selector': toJson_LabelSelector(obj.selector),
        'template': toJson_PodTemplateSpec(obj.template),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ReplicaSetSpecV1Beta1 = toJson_ReplicaSetSpecV1Beta1;
/**
 * Converts an object of type 'NetworkPolicySpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_NetworkPolicySpec(obj) {
    var _a, _b, _c;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'egress': (_a = obj.egress) === null || _a === void 0 ? void 0 : _a.map(y => toJson_NetworkPolicyEgressRule(y)),
        'ingress': (_b = obj.ingress) === null || _b === void 0 ? void 0 : _b.map(y => toJson_NetworkPolicyIngressRule(y)),
        'podSelector': toJson_LabelSelector(obj.podSelector),
        'policyTypes': (_c = obj.policyTypes) === null || _c === void 0 ? void 0 : _c.map(y => y),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_NetworkPolicySpec = toJson_NetworkPolicySpec;
/**
 * Converts an object of type 'RuntimeClassSpecV1Alpha1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_RuntimeClassSpecV1Alpha1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'runtimeHandler': obj.runtimeHandler,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_RuntimeClassSpecV1Alpha1 = toJson_RuntimeClassSpecV1Alpha1;
/**
 * Converts an object of type 'DeleteOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_DeleteOptions(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'apiVersion': obj.apiVersion,
        'dryRun': (_a = obj.dryRun) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'gracePeriodSeconds': obj.gracePeriodSeconds,
        'kind': obj.kind,
        'orphanDependents': obj.orphanDependents,
        'preconditions': toJson_Preconditions(obj.preconditions),
        'propagationPolicy': obj.propagationPolicy,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_DeleteOptions = toJson_DeleteOptions;
/**
 * Converts an object of type 'PodDisruptionBudgetSpecV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PodDisruptionBudgetSpecV1Beta1(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'maxUnavailable': (_a = obj.maxUnavailable) === null || _a === void 0 ? void 0 : _a.value,
        'minAvailable': (_b = obj.minAvailable) === null || _b === void 0 ? void 0 : _b.value,
        'selector': toJson_LabelSelector(obj.selector),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PodDisruptionBudgetSpecV1Beta1 = toJson_PodDisruptionBudgetSpecV1Beta1;
/**
 * Converts an object of type 'AggregationRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_AggregationRule(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'clusterRoleSelectors': (_a = obj.clusterRoleSelectors) === null || _a === void 0 ? void 0 : _a.map(y => toJson_LabelSelector(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_AggregationRule = toJson_AggregationRule;
/**
 * Converts an object of type 'PolicyRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PolicyRule(obj) {
    var _a, _b, _c, _d, _e;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'apiGroups': (_a = obj.apiGroups) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'nonResourceURLs': (_b = obj.nonResourceUrLs) === null || _b === void 0 ? void 0 : _b.map(y => y),
        'resourceNames': (_c = obj.resourceNames) === null || _c === void 0 ? void 0 : _c.map(y => y),
        'resources': (_d = obj.resources) === null || _d === void 0 ? void 0 : _d.map(y => y),
        'verbs': (_e = obj.verbs) === null || _e === void 0 ? void 0 : _e.map(y => y),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PolicyRule = toJson_PolicyRule;
/**
 * Converts an object of type 'RoleRef' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_RoleRef(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'apiGroup': obj.apiGroup,
        'kind': obj.kind,
        'name': obj.name,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_RoleRef = toJson_RoleRef;
/**
 * Converts an object of type 'Subject' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_Subject(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'apiGroup': obj.apiGroup,
        'kind': obj.kind,
        'name': obj.name,
        'namespace': obj.namespace,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_Subject = toJson_Subject;
/**
 * Converts an object of type 'AggregationRuleV1Alpha1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_AggregationRuleV1Alpha1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'clusterRoleSelectors': (_a = obj.clusterRoleSelectors) === null || _a === void 0 ? void 0 : _a.map(y => toJson_LabelSelector(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_AggregationRuleV1Alpha1 = toJson_AggregationRuleV1Alpha1;
/**
 * Converts an object of type 'PolicyRuleV1Alpha1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PolicyRuleV1Alpha1(obj) {
    var _a, _b, _c, _d, _e;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'apiGroups': (_a = obj.apiGroups) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'nonResourceURLs': (_b = obj.nonResourceUrLs) === null || _b === void 0 ? void 0 : _b.map(y => y),
        'resourceNames': (_c = obj.resourceNames) === null || _c === void 0 ? void 0 : _c.map(y => y),
        'resources': (_d = obj.resources) === null || _d === void 0 ? void 0 : _d.map(y => y),
        'verbs': (_e = obj.verbs) === null || _e === void 0 ? void 0 : _e.map(y => y),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PolicyRuleV1Alpha1 = toJson_PolicyRuleV1Alpha1;
/**
 * Converts an object of type 'RoleRefV1Alpha1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_RoleRefV1Alpha1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'apiGroup': obj.apiGroup,
        'kind': obj.kind,
        'name': obj.name,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_RoleRefV1Alpha1 = toJson_RoleRefV1Alpha1;
/**
 * Converts an object of type 'SubjectV1Alpha1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_SubjectV1Alpha1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'apiVersion': obj.apiVersion,
        'kind': obj.kind,
        'name': obj.name,
        'namespace': obj.namespace,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_SubjectV1Alpha1 = toJson_SubjectV1Alpha1;
/**
 * Converts an object of type 'AggregationRuleV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_AggregationRuleV1Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'clusterRoleSelectors': (_a = obj.clusterRoleSelectors) === null || _a === void 0 ? void 0 : _a.map(y => toJson_LabelSelector(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_AggregationRuleV1Beta1 = toJson_AggregationRuleV1Beta1;
/**
 * Converts an object of type 'PolicyRuleV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PolicyRuleV1Beta1(obj) {
    var _a, _b, _c, _d, _e;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'apiGroups': (_a = obj.apiGroups) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'nonResourceURLs': (_b = obj.nonResourceUrLs) === null || _b === void 0 ? void 0 : _b.map(y => y),
        'resourceNames': (_c = obj.resourceNames) === null || _c === void 0 ? void 0 : _c.map(y => y),
        'resources': (_d = obj.resources) === null || _d === void 0 ? void 0 : _d.map(y => y),
        'verbs': (_e = obj.verbs) === null || _e === void 0 ? void 0 : _e.map(y => y),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PolicyRuleV1Beta1 = toJson_PolicyRuleV1Beta1;
/**
 * Converts an object of type 'RoleRefV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_RoleRefV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'apiGroup': obj.apiGroup,
        'kind': obj.kind,
        'name': obj.name,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_RoleRefV1Beta1 = toJson_RoleRefV1Beta1;
/**
 * Converts an object of type 'SubjectV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_SubjectV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'apiGroup': obj.apiGroup,
        'kind': obj.kind,
        'name': obj.name,
        'namespace': obj.namespace,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_SubjectV1Beta1 = toJson_SubjectV1Beta1;
/**
 * Converts an object of type 'PodPresetSpecV1Alpha1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PodPresetSpecV1Alpha1(obj) {
    var _a, _b, _c, _d;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'env': (_a = obj.env) === null || _a === void 0 ? void 0 : _a.map(y => toJson_EnvVar(y)),
        'envFrom': (_b = obj.envFrom) === null || _b === void 0 ? void 0 : _b.map(y => toJson_EnvFromSource(y)),
        'selector': toJson_LabelSelector(obj.selector),
        'volumeMounts': (_c = obj.volumeMounts) === null || _c === void 0 ? void 0 : _c.map(y => toJson_VolumeMount(y)),
        'volumes': (_d = obj.volumes) === null || _d === void 0 ? void 0 : _d.map(y => toJson_Volume(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PodPresetSpecV1Alpha1 = toJson_PodPresetSpecV1Alpha1;
/**
 * Converts an object of type 'TopologySelectorTerm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_TopologySelectorTerm(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'matchLabelExpressions': (_a = obj.matchLabelExpressions) === null || _a === void 0 ? void 0 : _a.map(y => toJson_TopologySelectorLabelRequirement(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_TopologySelectorTerm = toJson_TopologySelectorTerm;
/**
 * Converts an object of type 'VolumeAttachmentSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_VolumeAttachmentSpec(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'attacher': obj.attacher,
        'nodeName': obj.nodeName,
        'source': toJson_VolumeAttachmentSource(obj.source),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_VolumeAttachmentSpec = toJson_VolumeAttachmentSpec;
/**
 * Converts an object of type 'VolumeAttachmentSpecV1Alpha1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_VolumeAttachmentSpecV1Alpha1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'attacher': obj.attacher,
        'nodeName': obj.nodeName,
        'source': toJson_VolumeAttachmentSourceV1Alpha1(obj.source),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_VolumeAttachmentSpecV1Alpha1 = toJson_VolumeAttachmentSpecV1Alpha1;
/**
 * Converts an object of type 'CsiDriverSpecV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CsiDriverSpecV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'attachRequired': obj.attachRequired,
        'podInfoOnMount': obj.podInfoOnMount,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CsiDriverSpecV1Beta1 = toJson_CsiDriverSpecV1Beta1;
/**
 * Converts an object of type 'CsiNodeSpecV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CsiNodeSpecV1Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'drivers': (_a = obj.drivers) === null || _a === void 0 ? void 0 : _a.map(y => toJson_CsiNodeDriverV1Beta1(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CsiNodeSpecV1Beta1 = toJson_CsiNodeSpecV1Beta1;
/**
 * Converts an object of type 'VolumeAttachmentSpecV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_VolumeAttachmentSpecV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'attacher': obj.attacher,
        'nodeName': obj.nodeName,
        'source': toJson_VolumeAttachmentSourceV1Beta1(obj.source),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_VolumeAttachmentSpecV1Beta1 = toJson_VolumeAttachmentSpecV1Beta1;
/**
 * Converts an object of type 'CustomResourceDefinitionSpecV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CustomResourceDefinitionSpecV1Beta1(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'additionalPrinterColumns': (_a = obj.additionalPrinterColumns) === null || _a === void 0 ? void 0 : _a.map(y => toJson_CustomResourceColumnDefinitionV1Beta1(y)),
        'conversion': toJson_CustomResourceConversionV1Beta1(obj.conversion),
        'group': obj.group,
        'names': toJson_CustomResourceDefinitionNamesV1Beta1(obj.names),
        'preserveUnknownFields': obj.preserveUnknownFields,
        'scope': obj.scope,
        'subresources': toJson_CustomResourceSubresourcesV1Beta1(obj.subresources),
        'validation': toJson_CustomResourceValidationV1Beta1(obj.validation),
        'version': obj.version,
        'versions': (_b = obj.versions) === null || _b === void 0 ? void 0 : _b.map(y => toJson_CustomResourceDefinitionVersionV1Beta1(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CustomResourceDefinitionSpecV1Beta1 = toJson_CustomResourceDefinitionSpecV1Beta1;
/**
 * Converts an object of type 'StatusDetails' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_StatusDetails(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'causes': (_a = obj.causes) === null || _a === void 0 ? void 0 : _a.map(y => toJson_StatusCause(y)),
        'group': obj.group,
        'kind': obj.kind,
        'name': obj.name,
        'retryAfterSeconds': obj.retryAfterSeconds,
        'uid': obj.uid,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_StatusDetails = toJson_StatusDetails;
/**
 * Converts an object of type 'ApiServiceSpec' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ApiServiceSpec(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'caBundle': obj.caBundle,
        'group': obj.group,
        'groupPriorityMinimum': obj.groupPriorityMinimum,
        'insecureSkipTLSVerify': obj.insecureSkipTlsVerify,
        'service': toJson_ServiceReference(obj.service),
        'version': obj.version,
        'versionPriority': obj.versionPriority,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ApiServiceSpec = toJson_ApiServiceSpec;
/**
 * Converts an object of type 'ApiServiceSpecV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ApiServiceSpecV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'caBundle': obj.caBundle,
        'group': obj.group,
        'groupPriorityMinimum': obj.groupPriorityMinimum,
        'insecureSkipTLSVerify': obj.insecureSkipTlsVerify,
        'service': toJson_ServiceReferenceV1Beta1(obj.service),
        'version': obj.version,
        'versionPriority': obj.versionPriority,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ApiServiceSpecV1Beta1 = toJson_ApiServiceSpecV1Beta1;
/**
 * Converts an object of type 'Initializers' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_Initializers(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'pending': (_a = obj.pending) === null || _a === void 0 ? void 0 : _a.map(y => toJson_Initializer(y)),
        'result': toJson_KubeStatusProps(obj.result),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_Initializers = toJson_Initializers;
/**
 * Converts an object of type 'ManagedFieldsEntry' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ManagedFieldsEntry(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'apiVersion': obj.apiVersion,
        'fields': obj.fields,
        'manager': obj.manager,
        'operation': obj.operation,
        'time': (_a = obj.time) === null || _a === void 0 ? void 0 : _a.toISOString(),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ManagedFieldsEntry = toJson_ManagedFieldsEntry;
/**
 * Converts an object of type 'OwnerReference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_OwnerReference(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'apiVersion': obj.apiVersion,
        'blockOwnerDeletion': obj.blockOwnerDeletion,
        'controller': obj.controller,
        'kind': obj.kind,
        'name': obj.name,
        'uid': obj.uid,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_OwnerReference = toJson_OwnerReference;
/**
 * Converts an object of type 'WebhookClientConfigV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_WebhookClientConfigV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'caBundle': obj.caBundle,
        'service': toJson_ServiceReferenceV1Beta1(obj.service),
        'url': obj.url,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_WebhookClientConfigV1Beta1 = toJson_WebhookClientConfigV1Beta1;
/**
 * Converts an object of type 'LabelSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_LabelSelector(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'matchExpressions': (_a = obj.matchExpressions) === null || _a === void 0 ? void 0 : _a.map(y => toJson_LabelSelectorRequirement(y)),
        'matchLabels': ((obj.matchLabels) === undefined) ? undefined : (Object.entries(obj.matchLabels).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {})),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_LabelSelector = toJson_LabelSelector;
/**
 * Converts an object of type 'RuleWithOperationsV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_RuleWithOperationsV1Beta1(obj) {
    var _a, _b, _c, _d;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'apiGroups': (_a = obj.apiGroups) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'apiVersions': (_b = obj.apiVersions) === null || _b === void 0 ? void 0 : _b.map(y => y),
        'operations': (_c = obj.operations) === null || _c === void 0 ? void 0 : _c.map(y => y),
        'resources': (_d = obj.resources) === null || _d === void 0 ? void 0 : _d.map(y => y),
        'scope': obj.scope,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_RuleWithOperationsV1Beta1 = toJson_RuleWithOperationsV1Beta1;
/**
 * Converts an object of type 'DaemonSetUpdateStrategy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_DaemonSetUpdateStrategy(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'rollingUpdate': toJson_RollingUpdateDaemonSet(obj.rollingUpdate),
        'type': obj.type,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_DaemonSetUpdateStrategy = toJson_DaemonSetUpdateStrategy;
/**
 * Converts an object of type 'DeploymentStrategy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_DeploymentStrategy(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'rollingUpdate': toJson_RollingUpdateDeployment(obj.rollingUpdate),
        'type': obj.type,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_DeploymentStrategy = toJson_DeploymentStrategy;
/**
 * Converts an object of type 'StatefulSetUpdateStrategy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_StatefulSetUpdateStrategy(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'rollingUpdate': toJson_RollingUpdateStatefulSetStrategy(obj.rollingUpdate),
        'type': obj.type,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_StatefulSetUpdateStrategy = toJson_StatefulSetUpdateStrategy;
/**
 * Converts an object of type 'RollbackConfigV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_RollbackConfigV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'revision': obj.revision,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_RollbackConfigV1Beta1 = toJson_RollbackConfigV1Beta1;
/**
 * Converts an object of type 'DeploymentStrategyV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_DeploymentStrategyV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'rollingUpdate': toJson_RollingUpdateDeploymentV1Beta1(obj.rollingUpdate),
        'type': obj.type,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_DeploymentStrategyV1Beta1 = toJson_DeploymentStrategyV1Beta1;
/**
 * Converts an object of type 'StatefulSetUpdateStrategyV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_StatefulSetUpdateStrategyV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'rollingUpdate': toJson_RollingUpdateStatefulSetStrategyV1Beta1(obj.rollingUpdate),
        'type': obj.type,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_StatefulSetUpdateStrategyV1Beta1 = toJson_StatefulSetUpdateStrategyV1Beta1;
/**
 * Converts an object of type 'DaemonSetUpdateStrategyV1Beta2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_DaemonSetUpdateStrategyV1Beta2(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'rollingUpdate': toJson_RollingUpdateDaemonSetV1Beta2(obj.rollingUpdate),
        'type': obj.type,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_DaemonSetUpdateStrategyV1Beta2 = toJson_DaemonSetUpdateStrategyV1Beta2;
/**
 * Converts an object of type 'DeploymentStrategyV1Beta2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_DeploymentStrategyV1Beta2(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'rollingUpdate': toJson_RollingUpdateDeploymentV1Beta2(obj.rollingUpdate),
        'type': obj.type,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_DeploymentStrategyV1Beta2 = toJson_DeploymentStrategyV1Beta2;
/**
 * Converts an object of type 'StatefulSetUpdateStrategyV1Beta2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_StatefulSetUpdateStrategyV1Beta2(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'rollingUpdate': toJson_RollingUpdateStatefulSetStrategyV1Beta2(obj.rollingUpdate),
        'type': obj.type,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_StatefulSetUpdateStrategyV1Beta2 = toJson_StatefulSetUpdateStrategyV1Beta2;
/**
 * Converts an object of type 'PolicyV1Alpha1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PolicyV1Alpha1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'level': obj.level,
        'stages': (_a = obj.stages) === null || _a === void 0 ? void 0 : _a.map(y => y),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PolicyV1Alpha1 = toJson_PolicyV1Alpha1;
/**
 * Converts an object of type 'WebhookV1Alpha1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_WebhookV1Alpha1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'clientConfig': toJson_WebhookClientConfigV1Alpha1(obj.clientConfig),
        'throttle': toJson_WebhookThrottleConfigV1Alpha1(obj.throttle),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_WebhookV1Alpha1 = toJson_WebhookV1Alpha1;
/**
 * Converts an object of type 'NonResourceAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_NonResourceAttributes(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'path': obj.path,
        'verb': obj.verb,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_NonResourceAttributes = toJson_NonResourceAttributes;
/**
 * Converts an object of type 'ResourceAttributes' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ResourceAttributes(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'group': obj.group,
        'name': obj.name,
        'namespace': obj.namespace,
        'resource': obj.resource,
        'subresource': obj.subresource,
        'verb': obj.verb,
        'version': obj.version,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ResourceAttributes = toJson_ResourceAttributes;
/**
 * Converts an object of type 'NonResourceAttributesV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_NonResourceAttributesV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'path': obj.path,
        'verb': obj.verb,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_NonResourceAttributesV1Beta1 = toJson_NonResourceAttributesV1Beta1;
/**
 * Converts an object of type 'ResourceAttributesV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ResourceAttributesV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'group': obj.group,
        'name': obj.name,
        'namespace': obj.namespace,
        'resource': obj.resource,
        'subresource': obj.subresource,
        'verb': obj.verb,
        'version': obj.version,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ResourceAttributesV1Beta1 = toJson_ResourceAttributesV1Beta1;
/**
 * Converts an object of type 'CrossVersionObjectReference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CrossVersionObjectReference(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'apiVersion': obj.apiVersion,
        'kind': obj.kind,
        'name': obj.name,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CrossVersionObjectReference = toJson_CrossVersionObjectReference;
/**
 * Converts an object of type 'MetricSpecV2Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_MetricSpecV2Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'external': toJson_ExternalMetricSourceV2Beta1(obj.external),
        'object': toJson_ObjectMetricSourceV2Beta1(obj.object),
        'pods': toJson_PodsMetricSourceV2Beta1(obj.pods),
        'resource': toJson_ResourceMetricSourceV2Beta1(obj.resource),
        'type': obj.type,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_MetricSpecV2Beta1 = toJson_MetricSpecV2Beta1;
/**
 * Converts an object of type 'CrossVersionObjectReferenceV2Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CrossVersionObjectReferenceV2Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'apiVersion': obj.apiVersion,
        'kind': obj.kind,
        'name': obj.name,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CrossVersionObjectReferenceV2Beta1 = toJson_CrossVersionObjectReferenceV2Beta1;
/**
 * Converts an object of type 'MetricSpecV2Beta2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_MetricSpecV2Beta2(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'external': toJson_ExternalMetricSourceV2Beta2(obj.external),
        'object': toJson_ObjectMetricSourceV2Beta2(obj.object),
        'pods': toJson_PodsMetricSourceV2Beta2(obj.pods),
        'resource': toJson_ResourceMetricSourceV2Beta2(obj.resource),
        'type': obj.type,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_MetricSpecV2Beta2 = toJson_MetricSpecV2Beta2;
/**
 * Converts an object of type 'CrossVersionObjectReferenceV2Beta2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CrossVersionObjectReferenceV2Beta2(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'apiVersion': obj.apiVersion,
        'kind': obj.kind,
        'name': obj.name,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CrossVersionObjectReferenceV2Beta2 = toJson_CrossVersionObjectReferenceV2Beta2;
/**
 * Converts an object of type 'JobTemplateSpecV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_JobTemplateSpecV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_JobSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_JobTemplateSpecV1Beta1 = toJson_JobTemplateSpecV1Beta1;
/**
 * Converts an object of type 'JobTemplateSpecV2Alpha1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_JobTemplateSpecV2Alpha1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metadata': toJson_ObjectMeta(obj.metadata),
        'spec': toJson_JobSpec(obj.spec),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_JobTemplateSpecV2Alpha1 = toJson_JobTemplateSpecV2Alpha1;
/**
 * Converts an object of type 'EndpointAddress' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_EndpointAddress(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'hostname': obj.hostname,
        'ip': obj.ip,
        'nodeName': obj.nodeName,
        'targetRef': toJson_ObjectReference(obj.targetRef),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_EndpointAddress = toJson_EndpointAddress;
/**
 * Converts an object of type 'EndpointPort' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_EndpointPort(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'name': obj.name,
        'port': obj.port,
        'protocol': obj.protocol,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_EndpointPort = toJson_EndpointPort;
/**
 * Converts an object of type 'LimitRangeItem' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_LimitRangeItem(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'default': ((obj.default) === undefined) ? undefined : (Object.entries(obj.default).reduce((r, i) => { var _a; return (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: (_a = i[1]) === null || _a === void 0 ? void 0 : _a.value })); }, {})),
        'defaultRequest': ((obj.defaultRequest) === undefined) ? undefined : (Object.entries(obj.defaultRequest).reduce((r, i) => { var _a; return (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: (_a = i[1]) === null || _a === void 0 ? void 0 : _a.value })); }, {})),
        'max': ((obj.max) === undefined) ? undefined : (Object.entries(obj.max).reduce((r, i) => { var _a; return (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: (_a = i[1]) === null || _a === void 0 ? void 0 : _a.value })); }, {})),
        'maxLimitRequestRatio': ((obj.maxLimitRequestRatio) === undefined) ? undefined : (Object.entries(obj.maxLimitRequestRatio).reduce((r, i) => { var _a; return (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: (_a = i[1]) === null || _a === void 0 ? void 0 : _a.value })); }, {})),
        'min': ((obj.min) === undefined) ? undefined : (Object.entries(obj.min).reduce((r, i) => { var _a; return (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: (_a = i[1]) === null || _a === void 0 ? void 0 : _a.value })); }, {})),
        'type': obj.type,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_LimitRangeItem = toJson_LimitRangeItem;
/**
 * Converts an object of type 'NodeConfigSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_NodeConfigSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'configMap': toJson_ConfigMapNodeConfigSource(obj.configMap),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_NodeConfigSource = toJson_NodeConfigSource;
/**
 * Converts an object of type 'Taint' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_Taint(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'effect': obj.effect,
        'key': obj.key,
        'timeAdded': (_a = obj.timeAdded) === null || _a === void 0 ? void 0 : _a.toISOString(),
        'value': obj.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_Taint = toJson_Taint;
/**
 * Converts an object of type 'AwsElasticBlockStoreVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_AwsElasticBlockStoreVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'fsType': obj.fsType,
        'partition': obj.partition,
        'readOnly': obj.readOnly,
        'volumeID': obj.volumeId,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_AwsElasticBlockStoreVolumeSource = toJson_AwsElasticBlockStoreVolumeSource;
/**
 * Converts an object of type 'AzureDiskVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_AzureDiskVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'cachingMode': obj.cachingMode,
        'diskName': obj.diskName,
        'diskURI': obj.diskUri,
        'fsType': obj.fsType,
        'kind': obj.kind,
        'readOnly': obj.readOnly,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_AzureDiskVolumeSource = toJson_AzureDiskVolumeSource;
/**
 * Converts an object of type 'AzureFilePersistentVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_AzureFilePersistentVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'readOnly': obj.readOnly,
        'secretName': obj.secretName,
        'secretNamespace': obj.secretNamespace,
        'shareName': obj.shareName,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_AzureFilePersistentVolumeSource = toJson_AzureFilePersistentVolumeSource;
/* eslint-enable max-len, quote-props */
/**
 * @schema io.k8s.apimachinery.pkg.api.resource.Quantity
 */
class Quantity {
    constructor(value) {
        this.value = value;
    }
    static fromString(value) {
        return new Quantity(value);
    }
    static fromNumber(value) {
        return new Quantity(value);
    }
}
exports.Quantity = Quantity;
/**
 * Converts an object of type 'CephFsPersistentVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CephFsPersistentVolumeSource(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'monitors': (_a = obj.monitors) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'path': obj.path,
        'readOnly': obj.readOnly,
        'secretFile': obj.secretFile,
        'secretRef': toJson_SecretReference(obj.secretRef),
        'user': obj.user,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CephFsPersistentVolumeSource = toJson_CephFsPersistentVolumeSource;
/**
 * Converts an object of type 'CinderPersistentVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CinderPersistentVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'fsType': obj.fsType,
        'readOnly': obj.readOnly,
        'secretRef': toJson_SecretReference(obj.secretRef),
        'volumeID': obj.volumeId,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CinderPersistentVolumeSource = toJson_CinderPersistentVolumeSource;
/**
 * Converts an object of type 'CsiPersistentVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CsiPersistentVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'controllerExpandSecretRef': toJson_SecretReference(obj.controllerExpandSecretRef),
        'controllerPublishSecretRef': toJson_SecretReference(obj.controllerPublishSecretRef),
        'driver': obj.driver,
        'fsType': obj.fsType,
        'nodePublishSecretRef': toJson_SecretReference(obj.nodePublishSecretRef),
        'nodeStageSecretRef': toJson_SecretReference(obj.nodeStageSecretRef),
        'readOnly': obj.readOnly,
        'volumeAttributes': ((obj.volumeAttributes) === undefined) ? undefined : (Object.entries(obj.volumeAttributes).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {})),
        'volumeHandle': obj.volumeHandle,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CsiPersistentVolumeSource = toJson_CsiPersistentVolumeSource;
/**
 * Converts an object of type 'FcVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_FcVolumeSource(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'fsType': obj.fsType,
        'lun': obj.lun,
        'readOnly': obj.readOnly,
        'targetWWNs': (_a = obj.targetWwNs) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'wwids': (_b = obj.wwids) === null || _b === void 0 ? void 0 : _b.map(y => y),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_FcVolumeSource = toJson_FcVolumeSource;
/**
 * Converts an object of type 'FlexPersistentVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_FlexPersistentVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'driver': obj.driver,
        'fsType': obj.fsType,
        'options': ((obj.options) === undefined) ? undefined : (Object.entries(obj.options).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {})),
        'readOnly': obj.readOnly,
        'secretRef': toJson_SecretReference(obj.secretRef),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_FlexPersistentVolumeSource = toJson_FlexPersistentVolumeSource;
/**
 * Converts an object of type 'FlockerVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_FlockerVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'datasetName': obj.datasetName,
        'datasetUUID': obj.datasetUuid,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_FlockerVolumeSource = toJson_FlockerVolumeSource;
/**
 * Converts an object of type 'GcePersistentDiskVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_GcePersistentDiskVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'fsType': obj.fsType,
        'partition': obj.partition,
        'pdName': obj.pdName,
        'readOnly': obj.readOnly,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_GcePersistentDiskVolumeSource = toJson_GcePersistentDiskVolumeSource;
/**
 * Converts an object of type 'GlusterfsPersistentVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_GlusterfsPersistentVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'endpoints': obj.endpoints,
        'endpointsNamespace': obj.endpointsNamespace,
        'path': obj.path,
        'readOnly': obj.readOnly,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_GlusterfsPersistentVolumeSource = toJson_GlusterfsPersistentVolumeSource;
/**
 * Converts an object of type 'HostPathVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_HostPathVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'path': obj.path,
        'type': obj.type,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_HostPathVolumeSource = toJson_HostPathVolumeSource;
/**
 * Converts an object of type 'IscsiPersistentVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_IscsiPersistentVolumeSource(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'chapAuthDiscovery': obj.chapAuthDiscovery,
        'chapAuthSession': obj.chapAuthSession,
        'fsType': obj.fsType,
        'initiatorName': obj.initiatorName,
        'iqn': obj.iqn,
        'iscsiInterface': obj.iscsiInterface,
        'lun': obj.lun,
        'portals': (_a = obj.portals) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'readOnly': obj.readOnly,
        'secretRef': toJson_SecretReference(obj.secretRef),
        'targetPortal': obj.targetPortal,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_IscsiPersistentVolumeSource = toJson_IscsiPersistentVolumeSource;
/**
 * Converts an object of type 'LocalVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_LocalVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'fsType': obj.fsType,
        'path': obj.path,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_LocalVolumeSource = toJson_LocalVolumeSource;
/**
 * Converts an object of type 'NfsVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_NfsVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'path': obj.path,
        'readOnly': obj.readOnly,
        'server': obj.server,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_NfsVolumeSource = toJson_NfsVolumeSource;
/**
 * Converts an object of type 'VolumeNodeAffinity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_VolumeNodeAffinity(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'required': toJson_NodeSelector(obj.required),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_VolumeNodeAffinity = toJson_VolumeNodeAffinity;
/**
 * Converts an object of type 'PhotonPersistentDiskVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PhotonPersistentDiskVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'fsType': obj.fsType,
        'pdID': obj.pdId,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PhotonPersistentDiskVolumeSource = toJson_PhotonPersistentDiskVolumeSource;
/**
 * Converts an object of type 'PortworxVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PortworxVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'fsType': obj.fsType,
        'readOnly': obj.readOnly,
        'volumeID': obj.volumeId,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PortworxVolumeSource = toJson_PortworxVolumeSource;
/**
 * Converts an object of type 'QuobyteVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_QuobyteVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'group': obj.group,
        'readOnly': obj.readOnly,
        'registry': obj.registry,
        'tenant': obj.tenant,
        'user': obj.user,
        'volume': obj.volume,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_QuobyteVolumeSource = toJson_QuobyteVolumeSource;
/**
 * Converts an object of type 'RbdPersistentVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_RbdPersistentVolumeSource(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'fsType': obj.fsType,
        'image': obj.image,
        'keyring': obj.keyring,
        'monitors': (_a = obj.monitors) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'pool': obj.pool,
        'readOnly': obj.readOnly,
        'secretRef': toJson_SecretReference(obj.secretRef),
        'user': obj.user,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_RbdPersistentVolumeSource = toJson_RbdPersistentVolumeSource;
/**
 * Converts an object of type 'ScaleIoPersistentVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ScaleIoPersistentVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'fsType': obj.fsType,
        'gateway': obj.gateway,
        'protectionDomain': obj.protectionDomain,
        'readOnly': obj.readOnly,
        'secretRef': toJson_SecretReference(obj.secretRef),
        'sslEnabled': obj.sslEnabled,
        'storageMode': obj.storageMode,
        'storagePool': obj.storagePool,
        'system': obj.system,
        'volumeName': obj.volumeName,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ScaleIoPersistentVolumeSource = toJson_ScaleIoPersistentVolumeSource;
/**
 * Converts an object of type 'StorageOsPersistentVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_StorageOsPersistentVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'fsType': obj.fsType,
        'readOnly': obj.readOnly,
        'secretRef': toJson_ObjectReference(obj.secretRef),
        'volumeName': obj.volumeName,
        'volumeNamespace': obj.volumeNamespace,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_StorageOsPersistentVolumeSource = toJson_StorageOsPersistentVolumeSource;
/**
 * Converts an object of type 'VsphereVirtualDiskVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_VsphereVirtualDiskVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'fsType': obj.fsType,
        'storagePolicyID': obj.storagePolicyId,
        'storagePolicyName': obj.storagePolicyName,
        'volumePath': obj.volumePath,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_VsphereVirtualDiskVolumeSource = toJson_VsphereVirtualDiskVolumeSource;
/**
 * Converts an object of type 'TypedLocalObjectReference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_TypedLocalObjectReference(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'apiGroup': obj.apiGroup,
        'kind': obj.kind,
        'name': obj.name,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_TypedLocalObjectReference = toJson_TypedLocalObjectReference;
/**
 * Converts an object of type 'ResourceRequirements' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ResourceRequirements(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'limits': ((obj.limits) === undefined) ? undefined : (Object.entries(obj.limits).reduce((r, i) => { var _a; return (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: (_a = i[1]) === null || _a === void 0 ? void 0 : _a.value })); }, {})),
        'requests': ((obj.requests) === undefined) ? undefined : (Object.entries(obj.requests).reduce((r, i) => { var _a; return (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: (_a = i[1]) === null || _a === void 0 ? void 0 : _a.value })); }, {})),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ResourceRequirements = toJson_ResourceRequirements;
/**
 * Converts an object of type 'Affinity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_Affinity(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'nodeAffinity': toJson_NodeAffinity(obj.nodeAffinity),
        'podAffinity': toJson_PodAffinity(obj.podAffinity),
        'podAntiAffinity': toJson_PodAntiAffinity(obj.podAntiAffinity),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_Affinity = toJson_Affinity;
/**
 * Converts an object of type 'Container' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_Container(obj) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'args': (_a = obj.args) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'command': (_b = obj.command) === null || _b === void 0 ? void 0 : _b.map(y => y),
        'env': (_c = obj.env) === null || _c === void 0 ? void 0 : _c.map(y => toJson_EnvVar(y)),
        'envFrom': (_d = obj.envFrom) === null || _d === void 0 ? void 0 : _d.map(y => toJson_EnvFromSource(y)),
        'image': obj.image,
        'imagePullPolicy': obj.imagePullPolicy,
        'lifecycle': toJson_Lifecycle(obj.lifecycle),
        'livenessProbe': toJson_Probe(obj.livenessProbe),
        'name': obj.name,
        'ports': (_e = obj.ports) === null || _e === void 0 ? void 0 : _e.map(y => toJson_ContainerPort(y)),
        'readinessProbe': toJson_Probe(obj.readinessProbe),
        'resources': toJson_ResourceRequirements(obj.resources),
        'securityContext': toJson_SecurityContext(obj.securityContext),
        'stdin': obj.stdin,
        'stdinOnce': obj.stdinOnce,
        'terminationMessagePath': obj.terminationMessagePath,
        'terminationMessagePolicy': obj.terminationMessagePolicy,
        'tty': obj.tty,
        'volumeDevices': (_f = obj.volumeDevices) === null || _f === void 0 ? void 0 : _f.map(y => toJson_VolumeDevice(y)),
        'volumeMounts': (_g = obj.volumeMounts) === null || _g === void 0 ? void 0 : _g.map(y => toJson_VolumeMount(y)),
        'workingDir': obj.workingDir,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_Container = toJson_Container;
/**
 * Converts an object of type 'PodDnsConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PodDnsConfig(obj) {
    var _a, _b, _c;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'nameservers': (_a = obj.nameservers) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'options': (_b = obj.options) === null || _b === void 0 ? void 0 : _b.map(y => toJson_PodDnsConfigOption(y)),
        'searches': (_c = obj.searches) === null || _c === void 0 ? void 0 : _c.map(y => y),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PodDnsConfig = toJson_PodDnsConfig;
/**
 * Converts an object of type 'HostAlias' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_HostAlias(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'hostnames': (_a = obj.hostnames) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'ip': obj.ip,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_HostAlias = toJson_HostAlias;
/**
 * Converts an object of type 'PodReadinessGate' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PodReadinessGate(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'conditionType': obj.conditionType,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PodReadinessGate = toJson_PodReadinessGate;
/**
 * Converts an object of type 'PodSecurityContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PodSecurityContext(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'fsGroup': obj.fsGroup,
        'runAsGroup': obj.runAsGroup,
        'runAsNonRoot': obj.runAsNonRoot,
        'runAsUser': obj.runAsUser,
        'seLinuxOptions': toJson_SeLinuxOptions(obj.seLinuxOptions),
        'supplementalGroups': (_a = obj.supplementalGroups) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'sysctls': (_b = obj.sysctls) === null || _b === void 0 ? void 0 : _b.map(y => toJson_Sysctl(y)),
        'windowsOptions': toJson_WindowsSecurityContextOptions(obj.windowsOptions),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PodSecurityContext = toJson_PodSecurityContext;
/**
 * Converts an object of type 'Toleration' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_Toleration(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'effect': obj.effect,
        'key': obj.key,
        'operator': obj.operator,
        'tolerationSeconds': obj.tolerationSeconds,
        'value': obj.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_Toleration = toJson_Toleration;
/**
 * Converts an object of type 'Volume' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_Volume(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'awsElasticBlockStore': toJson_AwsElasticBlockStoreVolumeSource(obj.awsElasticBlockStore),
        'azureDisk': toJson_AzureDiskVolumeSource(obj.azureDisk),
        'azureFile': toJson_AzureFileVolumeSource(obj.azureFile),
        'cephfs': toJson_CephFsVolumeSource(obj.cephfs),
        'cinder': toJson_CinderVolumeSource(obj.cinder),
        'configMap': toJson_ConfigMapVolumeSource(obj.configMap),
        'csi': toJson_CsiVolumeSource(obj.csi),
        'downwardAPI': toJson_DownwardApiVolumeSource(obj.downwardApi),
        'emptyDir': toJson_EmptyDirVolumeSource(obj.emptyDir),
        'fc': toJson_FcVolumeSource(obj.fc),
        'flexVolume': toJson_FlexVolumeSource(obj.flexVolume),
        'flocker': toJson_FlockerVolumeSource(obj.flocker),
        'gcePersistentDisk': toJson_GcePersistentDiskVolumeSource(obj.gcePersistentDisk),
        'gitRepo': toJson_GitRepoVolumeSource(obj.gitRepo),
        'glusterfs': toJson_GlusterfsVolumeSource(obj.glusterfs),
        'hostPath': toJson_HostPathVolumeSource(obj.hostPath),
        'iscsi': toJson_IscsiVolumeSource(obj.iscsi),
        'name': obj.name,
        'nfs': toJson_NfsVolumeSource(obj.nfs),
        'persistentVolumeClaim': toJson_PersistentVolumeClaimVolumeSource(obj.persistentVolumeClaim),
        'photonPersistentDisk': toJson_PhotonPersistentDiskVolumeSource(obj.photonPersistentDisk),
        'portworxVolume': toJson_PortworxVolumeSource(obj.portworxVolume),
        'projected': toJson_ProjectedVolumeSource(obj.projected),
        'quobyte': toJson_QuobyteVolumeSource(obj.quobyte),
        'rbd': toJson_RbdVolumeSource(obj.rbd),
        'scaleIO': toJson_ScaleIoVolumeSource(obj.scaleIo),
        'secret': toJson_SecretVolumeSource(obj.secret),
        'storageos': toJson_StorageOsVolumeSource(obj.storageos),
        'vsphereVolume': toJson_VsphereVirtualDiskVolumeSource(obj.vsphereVolume),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_Volume = toJson_Volume;
/**
 * Converts an object of type 'ScopeSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ScopeSelector(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'matchExpressions': (_a = obj.matchExpressions) === null || _a === void 0 ? void 0 : _a.map(y => toJson_ScopedResourceSelectorRequirement(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ScopeSelector = toJson_ScopeSelector;
/**
 * Converts an object of type 'ServicePort' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ServicePort(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'name': obj.name,
        'nodePort': obj.nodePort,
        'port': obj.port,
        'protocol': obj.protocol,
        'targetPort': (_a = obj.targetPort) === null || _a === void 0 ? void 0 : _a.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ServicePort = toJson_ServicePort;
/**
 * Converts an object of type 'SessionAffinityConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_SessionAffinityConfig(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'clientIP': toJson_ClientIpConfig(obj.clientIp),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_SessionAffinityConfig = toJson_SessionAffinityConfig;
/**
 * Converts an object of type 'DaemonSetUpdateStrategyV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_DaemonSetUpdateStrategyV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'rollingUpdate': toJson_RollingUpdateDaemonSetV1Beta1(obj.rollingUpdate),
        'type': obj.type,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_DaemonSetUpdateStrategyV1Beta1 = toJson_DaemonSetUpdateStrategyV1Beta1;
/**
 * Converts an object of type 'IngressBackendV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_IngressBackendV1Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'serviceName': obj.serviceName,
        'servicePort': (_a = obj.servicePort) === null || _a === void 0 ? void 0 : _a.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_IngressBackendV1Beta1 = toJson_IngressBackendV1Beta1;
/**
 * Converts an object of type 'IngressRuleV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_IngressRuleV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'host': obj.host,
        'http': toJson_HttpIngressRuleValueV1Beta1(obj.http),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_IngressRuleV1Beta1 = toJson_IngressRuleV1Beta1;
/**
 * Converts an object of type 'IngressTlsv1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_IngressTlsv1Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'hosts': (_a = obj.hosts) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'secretName': obj.secretName,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_IngressTlsv1Beta1 = toJson_IngressTlsv1Beta1;
/**
 * Converts an object of type 'NetworkPolicyEgressRuleV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_NetworkPolicyEgressRuleV1Beta1(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'ports': (_a = obj.ports) === null || _a === void 0 ? void 0 : _a.map(y => toJson_NetworkPolicyPortV1Beta1(y)),
        'to': (_b = obj.to) === null || _b === void 0 ? void 0 : _b.map(y => toJson_NetworkPolicyPeerV1Beta1(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_NetworkPolicyEgressRuleV1Beta1 = toJson_NetworkPolicyEgressRuleV1Beta1;
/**
 * Converts an object of type 'NetworkPolicyIngressRuleV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_NetworkPolicyIngressRuleV1Beta1(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'from': (_a = obj.from) === null || _a === void 0 ? void 0 : _a.map(y => toJson_NetworkPolicyPeerV1Beta1(y)),
        'ports': (_b = obj.ports) === null || _b === void 0 ? void 0 : _b.map(y => toJson_NetworkPolicyPortV1Beta1(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_NetworkPolicyIngressRuleV1Beta1 = toJson_NetworkPolicyIngressRuleV1Beta1;
/**
 * Converts an object of type 'AllowedCsiDriverV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_AllowedCsiDriverV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'name': obj.name,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_AllowedCsiDriverV1Beta1 = toJson_AllowedCsiDriverV1Beta1;
/**
 * Converts an object of type 'AllowedFlexVolumeV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_AllowedFlexVolumeV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'driver': obj.driver,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_AllowedFlexVolumeV1Beta1 = toJson_AllowedFlexVolumeV1Beta1;
/**
 * Converts an object of type 'AllowedHostPathV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_AllowedHostPathV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'pathPrefix': obj.pathPrefix,
        'readOnly': obj.readOnly,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_AllowedHostPathV1Beta1 = toJson_AllowedHostPathV1Beta1;
/**
 * Converts an object of type 'FsGroupStrategyOptionsV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_FsGroupStrategyOptionsV1Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'ranges': (_a = obj.ranges) === null || _a === void 0 ? void 0 : _a.map(y => toJson_IdRangeV1Beta1(y)),
        'rule': obj.rule,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_FsGroupStrategyOptionsV1Beta1 = toJson_FsGroupStrategyOptionsV1Beta1;
/**
 * Converts an object of type 'HostPortRangeV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_HostPortRangeV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'max': obj.max,
        'min': obj.min,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_HostPortRangeV1Beta1 = toJson_HostPortRangeV1Beta1;
/**
 * Converts an object of type 'RunAsGroupStrategyOptionsV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_RunAsGroupStrategyOptionsV1Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'ranges': (_a = obj.ranges) === null || _a === void 0 ? void 0 : _a.map(y => toJson_IdRangeV1Beta1(y)),
        'rule': obj.rule,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_RunAsGroupStrategyOptionsV1Beta1 = toJson_RunAsGroupStrategyOptionsV1Beta1;
/**
 * Converts an object of type 'RunAsUserStrategyOptionsV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_RunAsUserStrategyOptionsV1Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'ranges': (_a = obj.ranges) === null || _a === void 0 ? void 0 : _a.map(y => toJson_IdRangeV1Beta1(y)),
        'rule': obj.rule,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_RunAsUserStrategyOptionsV1Beta1 = toJson_RunAsUserStrategyOptionsV1Beta1;
/**
 * Converts an object of type 'RuntimeClassStrategyOptionsV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_RuntimeClassStrategyOptionsV1Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'allowedRuntimeClassNames': (_a = obj.allowedRuntimeClassNames) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'defaultRuntimeClassName': obj.defaultRuntimeClassName,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_RuntimeClassStrategyOptionsV1Beta1 = toJson_RuntimeClassStrategyOptionsV1Beta1;
/**
 * Converts an object of type 'SeLinuxStrategyOptionsV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_SeLinuxStrategyOptionsV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'rule': obj.rule,
        'seLinuxOptions': toJson_SeLinuxOptions(obj.seLinuxOptions),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_SeLinuxStrategyOptionsV1Beta1 = toJson_SeLinuxStrategyOptionsV1Beta1;
/**
 * Converts an object of type 'SupplementalGroupsStrategyOptionsV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_SupplementalGroupsStrategyOptionsV1Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'ranges': (_a = obj.ranges) === null || _a === void 0 ? void 0 : _a.map(y => toJson_IdRangeV1Beta1(y)),
        'rule': obj.rule,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_SupplementalGroupsStrategyOptionsV1Beta1 = toJson_SupplementalGroupsStrategyOptionsV1Beta1;
/**
 * Converts an object of type 'NetworkPolicyEgressRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_NetworkPolicyEgressRule(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'ports': (_a = obj.ports) === null || _a === void 0 ? void 0 : _a.map(y => toJson_NetworkPolicyPort(y)),
        'to': (_b = obj.to) === null || _b === void 0 ? void 0 : _b.map(y => toJson_NetworkPolicyPeer(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_NetworkPolicyEgressRule = toJson_NetworkPolicyEgressRule;
/**
 * Converts an object of type 'NetworkPolicyIngressRule' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_NetworkPolicyIngressRule(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'from': (_a = obj.from) === null || _a === void 0 ? void 0 : _a.map(y => toJson_NetworkPolicyPeer(y)),
        'ports': (_b = obj.ports) === null || _b === void 0 ? void 0 : _b.map(y => toJson_NetworkPolicyPort(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_NetworkPolicyIngressRule = toJson_NetworkPolicyIngressRule;
/* eslint-enable max-len, quote-props */
/**
 * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
 *
 * @schema IoK8SApimachineryPkgApisMetaV1DeleteOptionsKind
 */
var IoK8SApimachineryPkgApisMetaV1DeleteOptionsKind;
(function (IoK8SApimachineryPkgApisMetaV1DeleteOptionsKind) {
    /** DeleteOptions */
    IoK8SApimachineryPkgApisMetaV1DeleteOptionsKind["DELETE_OPTIONS"] = "DeleteOptions";
})(IoK8SApimachineryPkgApisMetaV1DeleteOptionsKind = exports.IoK8SApimachineryPkgApisMetaV1DeleteOptionsKind || (exports.IoK8SApimachineryPkgApisMetaV1DeleteOptionsKind = {}));
/**
 * Converts an object of type 'Preconditions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_Preconditions(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'resourceVersion': obj.resourceVersion,
        'uid': obj.uid,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_Preconditions = toJson_Preconditions;
/* eslint-enable max-len, quote-props */
/**
 * @schema io.k8s.apimachinery.pkg.util.intstr.IntOrString
 */
class IntOrString {
    constructor(value) {
        this.value = value;
    }
    static fromString(value) {
        return new IntOrString(value);
    }
    static fromNumber(value) {
        return new IntOrString(value);
    }
}
exports.IntOrString = IntOrString;
/**
 * Converts an object of type 'EnvVar' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_EnvVar(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'name': obj.name,
        'value': obj.value,
        'valueFrom': toJson_EnvVarSource(obj.valueFrom),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_EnvVar = toJson_EnvVar;
/**
 * Converts an object of type 'EnvFromSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_EnvFromSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'configMapRef': toJson_ConfigMapEnvSource(obj.configMapRef),
        'prefix': obj.prefix,
        'secretRef': toJson_SecretEnvSource(obj.secretRef),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_EnvFromSource = toJson_EnvFromSource;
/**
 * Converts an object of type 'VolumeMount' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_VolumeMount(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'mountPath': obj.mountPath,
        'mountPropagation': obj.mountPropagation,
        'name': obj.name,
        'readOnly': obj.readOnly,
        'subPath': obj.subPath,
        'subPathExpr': obj.subPathExpr,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_VolumeMount = toJson_VolumeMount;
/**
 * Converts an object of type 'TopologySelectorLabelRequirement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_TopologySelectorLabelRequirement(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'key': obj.key,
        'values': (_a = obj.values) === null || _a === void 0 ? void 0 : _a.map(y => y),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_TopologySelectorLabelRequirement = toJson_TopologySelectorLabelRequirement;
/**
 * Converts an object of type 'VolumeAttachmentSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_VolumeAttachmentSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'inlineVolumeSpec': toJson_PersistentVolumeSpec(obj.inlineVolumeSpec),
        'persistentVolumeName': obj.persistentVolumeName,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_VolumeAttachmentSource = toJson_VolumeAttachmentSource;
/**
 * Converts an object of type 'VolumeAttachmentSourceV1Alpha1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_VolumeAttachmentSourceV1Alpha1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'inlineVolumeSpec': toJson_PersistentVolumeSpec(obj.inlineVolumeSpec),
        'persistentVolumeName': obj.persistentVolumeName,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_VolumeAttachmentSourceV1Alpha1 = toJson_VolumeAttachmentSourceV1Alpha1;
/**
 * Converts an object of type 'CsiNodeDriverV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CsiNodeDriverV1Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'name': obj.name,
        'nodeID': obj.nodeId,
        'topologyKeys': (_a = obj.topologyKeys) === null || _a === void 0 ? void 0 : _a.map(y => y),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CsiNodeDriverV1Beta1 = toJson_CsiNodeDriverV1Beta1;
/**
 * Converts an object of type 'VolumeAttachmentSourceV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_VolumeAttachmentSourceV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'inlineVolumeSpec': toJson_PersistentVolumeSpec(obj.inlineVolumeSpec),
        'persistentVolumeName': obj.persistentVolumeName,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_VolumeAttachmentSourceV1Beta1 = toJson_VolumeAttachmentSourceV1Beta1;
/**
 * Converts an object of type 'CustomResourceColumnDefinitionV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CustomResourceColumnDefinitionV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'JSONPath': obj.jsonPath,
        'description': obj.description,
        'format': obj.format,
        'name': obj.name,
        'priority': obj.priority,
        'type': obj.type,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CustomResourceColumnDefinitionV1Beta1 = toJson_CustomResourceColumnDefinitionV1Beta1;
/**
 * Converts an object of type 'CustomResourceConversionV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CustomResourceConversionV1Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'conversionReviewVersions': (_a = obj.conversionReviewVersions) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'strategy': obj.strategy,
        'webhookClientConfig': toJson_WebhookClientConfigV1Beta1(obj.webhookClientConfig),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CustomResourceConversionV1Beta1 = toJson_CustomResourceConversionV1Beta1;
/**
 * Converts an object of type 'CustomResourceDefinitionNamesV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CustomResourceDefinitionNamesV1Beta1(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'categories': (_a = obj.categories) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'kind': obj.kind,
        'listKind': obj.listKind,
        'plural': obj.plural,
        'shortNames': (_b = obj.shortNames) === null || _b === void 0 ? void 0 : _b.map(y => y),
        'singular': obj.singular,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CustomResourceDefinitionNamesV1Beta1 = toJson_CustomResourceDefinitionNamesV1Beta1;
/**
 * Converts an object of type 'CustomResourceSubresourcesV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CustomResourceSubresourcesV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'scale': toJson_CustomResourceSubresourceScaleV1Beta1(obj.scale),
        'status': obj.status,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CustomResourceSubresourcesV1Beta1 = toJson_CustomResourceSubresourcesV1Beta1;
/**
 * Converts an object of type 'CustomResourceValidationV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CustomResourceValidationV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'openAPIV3Schema': toJson_JsonSchemaPropsV1Beta1(obj.openApiv3Schema),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CustomResourceValidationV1Beta1 = toJson_CustomResourceValidationV1Beta1;
/**
 * Converts an object of type 'CustomResourceDefinitionVersionV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CustomResourceDefinitionVersionV1Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'additionalPrinterColumns': (_a = obj.additionalPrinterColumns) === null || _a === void 0 ? void 0 : _a.map(y => toJson_CustomResourceColumnDefinitionV1Beta1(y)),
        'name': obj.name,
        'schema': toJson_CustomResourceValidationV1Beta1(obj.schema),
        'served': obj.served,
        'storage': obj.storage,
        'subresources': toJson_CustomResourceSubresourcesV1Beta1(obj.subresources),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CustomResourceDefinitionVersionV1Beta1 = toJson_CustomResourceDefinitionVersionV1Beta1;
/**
 * Converts an object of type 'StatusCause' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_StatusCause(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'field': obj.field,
        'message': obj.message,
        'reason': obj.reason,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_StatusCause = toJson_StatusCause;
/**
 * Converts an object of type 'ServiceReference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ServiceReference(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'name': obj.name,
        'namespace': obj.namespace,
        'port': obj.port,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ServiceReference = toJson_ServiceReference;
/**
 * Converts an object of type 'ServiceReferenceV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ServiceReferenceV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'name': obj.name,
        'namespace': obj.namespace,
        'path': obj.path,
        'port': obj.port,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ServiceReferenceV1Beta1 = toJson_ServiceReferenceV1Beta1;
/**
 * Converts an object of type 'Initializer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_Initializer(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'name': obj.name,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_Initializer = toJson_Initializer;
/**
 * Converts an object of type 'LabelSelectorRequirement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_LabelSelectorRequirement(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'key': obj.key,
        'operator': obj.operator,
        'values': (_a = obj.values) === null || _a === void 0 ? void 0 : _a.map(y => y),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_LabelSelectorRequirement = toJson_LabelSelectorRequirement;
/**
 * Converts an object of type 'RollingUpdateDaemonSet' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_RollingUpdateDaemonSet(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'maxUnavailable': (_a = obj.maxUnavailable) === null || _a === void 0 ? void 0 : _a.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_RollingUpdateDaemonSet = toJson_RollingUpdateDaemonSet;
/**
 * Converts an object of type 'RollingUpdateDeployment' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_RollingUpdateDeployment(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'maxSurge': (_a = obj.maxSurge) === null || _a === void 0 ? void 0 : _a.value,
        'maxUnavailable': (_b = obj.maxUnavailable) === null || _b === void 0 ? void 0 : _b.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_RollingUpdateDeployment = toJson_RollingUpdateDeployment;
/**
 * Converts an object of type 'RollingUpdateStatefulSetStrategy' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_RollingUpdateStatefulSetStrategy(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'partition': obj.partition,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_RollingUpdateStatefulSetStrategy = toJson_RollingUpdateStatefulSetStrategy;
/**
 * Converts an object of type 'RollingUpdateDeploymentV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_RollingUpdateDeploymentV1Beta1(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'maxSurge': (_a = obj.maxSurge) === null || _a === void 0 ? void 0 : _a.value,
        'maxUnavailable': (_b = obj.maxUnavailable) === null || _b === void 0 ? void 0 : _b.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_RollingUpdateDeploymentV1Beta1 = toJson_RollingUpdateDeploymentV1Beta1;
/**
 * Converts an object of type 'RollingUpdateStatefulSetStrategyV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_RollingUpdateStatefulSetStrategyV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'partition': obj.partition,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_RollingUpdateStatefulSetStrategyV1Beta1 = toJson_RollingUpdateStatefulSetStrategyV1Beta1;
/**
 * Converts an object of type 'RollingUpdateDaemonSetV1Beta2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_RollingUpdateDaemonSetV1Beta2(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'maxUnavailable': (_a = obj.maxUnavailable) === null || _a === void 0 ? void 0 : _a.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_RollingUpdateDaemonSetV1Beta2 = toJson_RollingUpdateDaemonSetV1Beta2;
/**
 * Converts an object of type 'RollingUpdateDeploymentV1Beta2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_RollingUpdateDeploymentV1Beta2(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'maxSurge': (_a = obj.maxSurge) === null || _a === void 0 ? void 0 : _a.value,
        'maxUnavailable': (_b = obj.maxUnavailable) === null || _b === void 0 ? void 0 : _b.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_RollingUpdateDeploymentV1Beta2 = toJson_RollingUpdateDeploymentV1Beta2;
/**
 * Converts an object of type 'RollingUpdateStatefulSetStrategyV1Beta2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_RollingUpdateStatefulSetStrategyV1Beta2(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'partition': obj.partition,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_RollingUpdateStatefulSetStrategyV1Beta2 = toJson_RollingUpdateStatefulSetStrategyV1Beta2;
/**
 * Converts an object of type 'WebhookClientConfigV1Alpha1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_WebhookClientConfigV1Alpha1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'caBundle': obj.caBundle,
        'service': toJson_ServiceReferenceV1Alpha1(obj.service),
        'url': obj.url,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_WebhookClientConfigV1Alpha1 = toJson_WebhookClientConfigV1Alpha1;
/**
 * Converts an object of type 'WebhookThrottleConfigV1Alpha1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_WebhookThrottleConfigV1Alpha1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'burst': obj.burst,
        'qps': obj.qps,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_WebhookThrottleConfigV1Alpha1 = toJson_WebhookThrottleConfigV1Alpha1;
/**
 * Converts an object of type 'ExternalMetricSourceV2Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ExternalMetricSourceV2Beta1(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metricName': obj.metricName,
        'metricSelector': toJson_LabelSelector(obj.metricSelector),
        'targetAverageValue': (_a = obj.targetAverageValue) === null || _a === void 0 ? void 0 : _a.value,
        'targetValue': (_b = obj.targetValue) === null || _b === void 0 ? void 0 : _b.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ExternalMetricSourceV2Beta1 = toJson_ExternalMetricSourceV2Beta1;
/**
 * Converts an object of type 'ObjectMetricSourceV2Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ObjectMetricSourceV2Beta1(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'averageValue': (_a = obj.averageValue) === null || _a === void 0 ? void 0 : _a.value,
        'metricName': obj.metricName,
        'selector': toJson_LabelSelector(obj.selector),
        'target': toJson_CrossVersionObjectReferenceV2Beta1(obj.target),
        'targetValue': (_b = obj.targetValue) === null || _b === void 0 ? void 0 : _b.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ObjectMetricSourceV2Beta1 = toJson_ObjectMetricSourceV2Beta1;
/**
 * Converts an object of type 'PodsMetricSourceV2Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PodsMetricSourceV2Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metricName': obj.metricName,
        'selector': toJson_LabelSelector(obj.selector),
        'targetAverageValue': (_a = obj.targetAverageValue) === null || _a === void 0 ? void 0 : _a.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PodsMetricSourceV2Beta1 = toJson_PodsMetricSourceV2Beta1;
/**
 * Converts an object of type 'ResourceMetricSourceV2Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ResourceMetricSourceV2Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'name': obj.name,
        'targetAverageUtilization': obj.targetAverageUtilization,
        'targetAverageValue': (_a = obj.targetAverageValue) === null || _a === void 0 ? void 0 : _a.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ResourceMetricSourceV2Beta1 = toJson_ResourceMetricSourceV2Beta1;
/**
 * Converts an object of type 'ExternalMetricSourceV2Beta2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ExternalMetricSourceV2Beta2(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metric': toJson_MetricIdentifierV2Beta2(obj.metric),
        'target': toJson_MetricTargetV2Beta2(obj.target),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ExternalMetricSourceV2Beta2 = toJson_ExternalMetricSourceV2Beta2;
/**
 * Converts an object of type 'ObjectMetricSourceV2Beta2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ObjectMetricSourceV2Beta2(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'describedObject': toJson_CrossVersionObjectReferenceV2Beta2(obj.describedObject),
        'metric': toJson_MetricIdentifierV2Beta2(obj.metric),
        'target': toJson_MetricTargetV2Beta2(obj.target),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ObjectMetricSourceV2Beta2 = toJson_ObjectMetricSourceV2Beta2;
/**
 * Converts an object of type 'PodsMetricSourceV2Beta2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PodsMetricSourceV2Beta2(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'metric': toJson_MetricIdentifierV2Beta2(obj.metric),
        'target': toJson_MetricTargetV2Beta2(obj.target),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PodsMetricSourceV2Beta2 = toJson_PodsMetricSourceV2Beta2;
/**
 * Converts an object of type 'ResourceMetricSourceV2Beta2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ResourceMetricSourceV2Beta2(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'name': obj.name,
        'target': toJson_MetricTargetV2Beta2(obj.target),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ResourceMetricSourceV2Beta2 = toJson_ResourceMetricSourceV2Beta2;
/**
 * Converts an object of type 'ConfigMapNodeConfigSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ConfigMapNodeConfigSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'kubeletConfigKey': obj.kubeletConfigKey,
        'name': obj.name,
        'namespace': obj.namespace,
        'resourceVersion': obj.resourceVersion,
        'uid': obj.uid,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ConfigMapNodeConfigSource = toJson_ConfigMapNodeConfigSource;
/**
 * Converts an object of type 'SecretReference' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_SecretReference(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'name': obj.name,
        'namespace': obj.namespace,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_SecretReference = toJson_SecretReference;
/**
 * Converts an object of type 'NodeSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_NodeSelector(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'nodeSelectorTerms': (_a = obj.nodeSelectorTerms) === null || _a === void 0 ? void 0 : _a.map(y => toJson_NodeSelectorTerm(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_NodeSelector = toJson_NodeSelector;
/**
 * Converts an object of type 'NodeAffinity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_NodeAffinity(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'preferredDuringSchedulingIgnoredDuringExecution': (_a = obj.preferredDuringSchedulingIgnoredDuringExecution) === null || _a === void 0 ? void 0 : _a.map(y => toJson_PreferredSchedulingTerm(y)),
        'requiredDuringSchedulingIgnoredDuringExecution': toJson_NodeSelector(obj.requiredDuringSchedulingIgnoredDuringExecution),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_NodeAffinity = toJson_NodeAffinity;
/**
 * Converts an object of type 'PodAffinity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PodAffinity(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'preferredDuringSchedulingIgnoredDuringExecution': (_a = obj.preferredDuringSchedulingIgnoredDuringExecution) === null || _a === void 0 ? void 0 : _a.map(y => toJson_WeightedPodAffinityTerm(y)),
        'requiredDuringSchedulingIgnoredDuringExecution': (_b = obj.requiredDuringSchedulingIgnoredDuringExecution) === null || _b === void 0 ? void 0 : _b.map(y => toJson_PodAffinityTerm(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PodAffinity = toJson_PodAffinity;
/**
 * Converts an object of type 'PodAntiAffinity' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PodAntiAffinity(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'preferredDuringSchedulingIgnoredDuringExecution': (_a = obj.preferredDuringSchedulingIgnoredDuringExecution) === null || _a === void 0 ? void 0 : _a.map(y => toJson_WeightedPodAffinityTerm(y)),
        'requiredDuringSchedulingIgnoredDuringExecution': (_b = obj.requiredDuringSchedulingIgnoredDuringExecution) === null || _b === void 0 ? void 0 : _b.map(y => toJson_PodAffinityTerm(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PodAntiAffinity = toJson_PodAntiAffinity;
/**
 * Converts an object of type 'Lifecycle' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_Lifecycle(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'postStart': toJson_Handler(obj.postStart),
        'preStop': toJson_Handler(obj.preStop),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_Lifecycle = toJson_Lifecycle;
/**
 * Converts an object of type 'Probe' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_Probe(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'exec': toJson_ExecAction(obj.exec),
        'failureThreshold': obj.failureThreshold,
        'httpGet': toJson_HttpGetAction(obj.httpGet),
        'initialDelaySeconds': obj.initialDelaySeconds,
        'periodSeconds': obj.periodSeconds,
        'successThreshold': obj.successThreshold,
        'tcpSocket': toJson_TcpSocketAction(obj.tcpSocket),
        'timeoutSeconds': obj.timeoutSeconds,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_Probe = toJson_Probe;
/**
 * Converts an object of type 'ContainerPort' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ContainerPort(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'containerPort': obj.containerPort,
        'hostIP': obj.hostIp,
        'hostPort': obj.hostPort,
        'name': obj.name,
        'protocol': obj.protocol,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ContainerPort = toJson_ContainerPort;
/**
 * Converts an object of type 'SecurityContext' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_SecurityContext(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'allowPrivilegeEscalation': obj.allowPrivilegeEscalation,
        'capabilities': toJson_Capabilities(obj.capabilities),
        'privileged': obj.privileged,
        'procMount': obj.procMount,
        'readOnlyRootFilesystem': obj.readOnlyRootFilesystem,
        'runAsGroup': obj.runAsGroup,
        'runAsNonRoot': obj.runAsNonRoot,
        'runAsUser': obj.runAsUser,
        'seLinuxOptions': toJson_SeLinuxOptions(obj.seLinuxOptions),
        'windowsOptions': toJson_WindowsSecurityContextOptions(obj.windowsOptions),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_SecurityContext = toJson_SecurityContext;
/**
 * Converts an object of type 'VolumeDevice' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_VolumeDevice(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'devicePath': obj.devicePath,
        'name': obj.name,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_VolumeDevice = toJson_VolumeDevice;
/**
 * Converts an object of type 'PodDnsConfigOption' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PodDnsConfigOption(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'name': obj.name,
        'value': obj.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PodDnsConfigOption = toJson_PodDnsConfigOption;
/**
 * Converts an object of type 'SeLinuxOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_SeLinuxOptions(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'level': obj.level,
        'role': obj.role,
        'type': obj.type,
        'user': obj.user,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_SeLinuxOptions = toJson_SeLinuxOptions;
/**
 * Converts an object of type 'Sysctl' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_Sysctl(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'name': obj.name,
        'value': obj.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_Sysctl = toJson_Sysctl;
/**
 * Converts an object of type 'WindowsSecurityContextOptions' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_WindowsSecurityContextOptions(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'gmsaCredentialSpec': obj.gmsaCredentialSpec,
        'gmsaCredentialSpecName': obj.gmsaCredentialSpecName,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_WindowsSecurityContextOptions = toJson_WindowsSecurityContextOptions;
/**
 * Converts an object of type 'AzureFileVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_AzureFileVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'readOnly': obj.readOnly,
        'secretName': obj.secretName,
        'shareName': obj.shareName,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_AzureFileVolumeSource = toJson_AzureFileVolumeSource;
/**
 * Converts an object of type 'CephFsVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CephFsVolumeSource(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'monitors': (_a = obj.monitors) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'path': obj.path,
        'readOnly': obj.readOnly,
        'secretFile': obj.secretFile,
        'secretRef': toJson_LocalObjectReference(obj.secretRef),
        'user': obj.user,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CephFsVolumeSource = toJson_CephFsVolumeSource;
/**
 * Converts an object of type 'CinderVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CinderVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'fsType': obj.fsType,
        'readOnly': obj.readOnly,
        'secretRef': toJson_LocalObjectReference(obj.secretRef),
        'volumeID': obj.volumeId,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CinderVolumeSource = toJson_CinderVolumeSource;
/**
 * Converts an object of type 'ConfigMapVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ConfigMapVolumeSource(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'defaultMode': obj.defaultMode,
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KeyToPath(y)),
        'name': obj.name,
        'optional': obj.optional,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ConfigMapVolumeSource = toJson_ConfigMapVolumeSource;
/**
 * Converts an object of type 'CsiVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CsiVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'driver': obj.driver,
        'fsType': obj.fsType,
        'nodePublishSecretRef': toJson_LocalObjectReference(obj.nodePublishSecretRef),
        'readOnly': obj.readOnly,
        'volumeAttributes': ((obj.volumeAttributes) === undefined) ? undefined : (Object.entries(obj.volumeAttributes).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {})),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CsiVolumeSource = toJson_CsiVolumeSource;
/**
 * Converts an object of type 'DownwardApiVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_DownwardApiVolumeSource(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'defaultMode': obj.defaultMode,
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_DownwardApiVolumeFile(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_DownwardApiVolumeSource = toJson_DownwardApiVolumeSource;
/**
 * Converts an object of type 'EmptyDirVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_EmptyDirVolumeSource(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'medium': obj.medium,
        'sizeLimit': (_a = obj.sizeLimit) === null || _a === void 0 ? void 0 : _a.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_EmptyDirVolumeSource = toJson_EmptyDirVolumeSource;
/**
 * Converts an object of type 'FlexVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_FlexVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'driver': obj.driver,
        'fsType': obj.fsType,
        'options': ((obj.options) === undefined) ? undefined : (Object.entries(obj.options).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {})),
        'readOnly': obj.readOnly,
        'secretRef': toJson_LocalObjectReference(obj.secretRef),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_FlexVolumeSource = toJson_FlexVolumeSource;
/**
 * Converts an object of type 'GitRepoVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_GitRepoVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'directory': obj.directory,
        'repository': obj.repository,
        'revision': obj.revision,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_GitRepoVolumeSource = toJson_GitRepoVolumeSource;
/**
 * Converts an object of type 'GlusterfsVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_GlusterfsVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'endpoints': obj.endpoints,
        'path': obj.path,
        'readOnly': obj.readOnly,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_GlusterfsVolumeSource = toJson_GlusterfsVolumeSource;
/**
 * Converts an object of type 'IscsiVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_IscsiVolumeSource(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'chapAuthDiscovery': obj.chapAuthDiscovery,
        'chapAuthSession': obj.chapAuthSession,
        'fsType': obj.fsType,
        'initiatorName': obj.initiatorName,
        'iqn': obj.iqn,
        'iscsiInterface': obj.iscsiInterface,
        'lun': obj.lun,
        'portals': (_a = obj.portals) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'readOnly': obj.readOnly,
        'secretRef': toJson_LocalObjectReference(obj.secretRef),
        'targetPortal': obj.targetPortal,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_IscsiVolumeSource = toJson_IscsiVolumeSource;
/**
 * Converts an object of type 'PersistentVolumeClaimVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PersistentVolumeClaimVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'claimName': obj.claimName,
        'readOnly': obj.readOnly,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PersistentVolumeClaimVolumeSource = toJson_PersistentVolumeClaimVolumeSource;
/**
 * Converts an object of type 'ProjectedVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ProjectedVolumeSource(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'defaultMode': obj.defaultMode,
        'sources': (_a = obj.sources) === null || _a === void 0 ? void 0 : _a.map(y => toJson_VolumeProjection(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ProjectedVolumeSource = toJson_ProjectedVolumeSource;
/**
 * Converts an object of type 'RbdVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_RbdVolumeSource(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'fsType': obj.fsType,
        'image': obj.image,
        'keyring': obj.keyring,
        'monitors': (_a = obj.monitors) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'pool': obj.pool,
        'readOnly': obj.readOnly,
        'secretRef': toJson_LocalObjectReference(obj.secretRef),
        'user': obj.user,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_RbdVolumeSource = toJson_RbdVolumeSource;
/**
 * Converts an object of type 'ScaleIoVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ScaleIoVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'fsType': obj.fsType,
        'gateway': obj.gateway,
        'protectionDomain': obj.protectionDomain,
        'readOnly': obj.readOnly,
        'secretRef': toJson_LocalObjectReference(obj.secretRef),
        'sslEnabled': obj.sslEnabled,
        'storageMode': obj.storageMode,
        'storagePool': obj.storagePool,
        'system': obj.system,
        'volumeName': obj.volumeName,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ScaleIoVolumeSource = toJson_ScaleIoVolumeSource;
/**
 * Converts an object of type 'SecretVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_SecretVolumeSource(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'defaultMode': obj.defaultMode,
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KeyToPath(y)),
        'optional': obj.optional,
        'secretName': obj.secretName,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_SecretVolumeSource = toJson_SecretVolumeSource;
/**
 * Converts an object of type 'StorageOsVolumeSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_StorageOsVolumeSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'fsType': obj.fsType,
        'readOnly': obj.readOnly,
        'secretRef': toJson_LocalObjectReference(obj.secretRef),
        'volumeName': obj.volumeName,
        'volumeNamespace': obj.volumeNamespace,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_StorageOsVolumeSource = toJson_StorageOsVolumeSource;
/**
 * Converts an object of type 'ScopedResourceSelectorRequirement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ScopedResourceSelectorRequirement(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'operator': obj.operator,
        'scopeName': obj.scopeName,
        'values': (_a = obj.values) === null || _a === void 0 ? void 0 : _a.map(y => y),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ScopedResourceSelectorRequirement = toJson_ScopedResourceSelectorRequirement;
/**
 * Converts an object of type 'ClientIpConfig' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ClientIpConfig(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'timeoutSeconds': obj.timeoutSeconds,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ClientIpConfig = toJson_ClientIpConfig;
/**
 * Converts an object of type 'RollingUpdateDaemonSetV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_RollingUpdateDaemonSetV1Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'maxUnavailable': (_a = obj.maxUnavailable) === null || _a === void 0 ? void 0 : _a.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_RollingUpdateDaemonSetV1Beta1 = toJson_RollingUpdateDaemonSetV1Beta1;
/**
 * Converts an object of type 'HttpIngressRuleValueV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_HttpIngressRuleValueV1Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'paths': (_a = obj.paths) === null || _a === void 0 ? void 0 : _a.map(y => toJson_HttpIngressPathV1Beta1(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_HttpIngressRuleValueV1Beta1 = toJson_HttpIngressRuleValueV1Beta1;
/**
 * Converts an object of type 'NetworkPolicyPortV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_NetworkPolicyPortV1Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'port': (_a = obj.port) === null || _a === void 0 ? void 0 : _a.value,
        'protocol': obj.protocol,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_NetworkPolicyPortV1Beta1 = toJson_NetworkPolicyPortV1Beta1;
/**
 * Converts an object of type 'NetworkPolicyPeerV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_NetworkPolicyPeerV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'ipBlock': toJson_IpBlockV1Beta1(obj.ipBlock),
        'namespaceSelector': toJson_LabelSelector(obj.namespaceSelector),
        'podSelector': toJson_LabelSelector(obj.podSelector),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_NetworkPolicyPeerV1Beta1 = toJson_NetworkPolicyPeerV1Beta1;
/**
 * Converts an object of type 'IdRangeV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_IdRangeV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'max': obj.max,
        'min': obj.min,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_IdRangeV1Beta1 = toJson_IdRangeV1Beta1;
/**
 * Converts an object of type 'NetworkPolicyPort' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_NetworkPolicyPort(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'port': (_a = obj.port) === null || _a === void 0 ? void 0 : _a.value,
        'protocol': obj.protocol,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_NetworkPolicyPort = toJson_NetworkPolicyPort;
/**
 * Converts an object of type 'NetworkPolicyPeer' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_NetworkPolicyPeer(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'ipBlock': toJson_IpBlock(obj.ipBlock),
        'namespaceSelector': toJson_LabelSelector(obj.namespaceSelector),
        'podSelector': toJson_LabelSelector(obj.podSelector),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_NetworkPolicyPeer = toJson_NetworkPolicyPeer;
/**
 * Converts an object of type 'EnvVarSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_EnvVarSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'configMapKeyRef': toJson_ConfigMapKeySelector(obj.configMapKeyRef),
        'fieldRef': toJson_ObjectFieldSelector(obj.fieldRef),
        'resourceFieldRef': toJson_ResourceFieldSelector(obj.resourceFieldRef),
        'secretKeyRef': toJson_SecretKeySelector(obj.secretKeyRef),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_EnvVarSource = toJson_EnvVarSource;
/**
 * Converts an object of type 'ConfigMapEnvSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ConfigMapEnvSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'name': obj.name,
        'optional': obj.optional,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ConfigMapEnvSource = toJson_ConfigMapEnvSource;
/**
 * Converts an object of type 'SecretEnvSource' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_SecretEnvSource(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'name': obj.name,
        'optional': obj.optional,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_SecretEnvSource = toJson_SecretEnvSource;
/**
 * Converts an object of type 'CustomResourceSubresourceScaleV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_CustomResourceSubresourceScaleV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'labelSelectorPath': obj.labelSelectorPath,
        'specReplicasPath': obj.specReplicasPath,
        'statusReplicasPath': obj.statusReplicasPath,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_CustomResourceSubresourceScaleV1Beta1 = toJson_CustomResourceSubresourceScaleV1Beta1;
/**
 * Converts an object of type 'JsonSchemaPropsV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_JsonSchemaPropsV1Beta1(obj) {
    var _a, _b, _c, _d, _e;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        '$ref': obj.ref,
        '$schema': obj.schema,
        'additionalItems': obj.additionalItems,
        'additionalProperties': obj.additionalProperties,
        'allOf': (_a = obj.allOf) === null || _a === void 0 ? void 0 : _a.map(y => toJson_JsonSchemaPropsV1Beta1(y)),
        'anyOf': (_b = obj.anyOf) === null || _b === void 0 ? void 0 : _b.map(y => toJson_JsonSchemaPropsV1Beta1(y)),
        'default': obj.default,
        'definitions': ((obj.definitions) === undefined) ? undefined : (Object.entries(obj.definitions).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: toJson_JsonSchemaPropsV1Beta1(i[1]) })), {})),
        'dependencies': ((obj.dependencies) === undefined) ? undefined : (Object.entries(obj.dependencies).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {})),
        'description': obj.description,
        'enum': (_c = obj.enum) === null || _c === void 0 ? void 0 : _c.map(y => y),
        'example': obj.example,
        'exclusiveMaximum': obj.exclusiveMaximum,
        'exclusiveMinimum': obj.exclusiveMinimum,
        'externalDocs': toJson_ExternalDocumentationV1Beta1(obj.externalDocs),
        'format': obj.format,
        'id': obj.id,
        'items': obj.items,
        'maxItems': obj.maxItems,
        'maxLength': obj.maxLength,
        'maxProperties': obj.maxProperties,
        'maximum': obj.maximum,
        'minItems': obj.minItems,
        'minLength': obj.minLength,
        'minProperties': obj.minProperties,
        'minimum': obj.minimum,
        'multipleOf': obj.multipleOf,
        'not': toJson_JsonSchemaPropsV1Beta1(obj.not),
        'nullable': obj.nullable,
        'oneOf': (_d = obj.oneOf) === null || _d === void 0 ? void 0 : _d.map(y => toJson_JsonSchemaPropsV1Beta1(y)),
        'pattern': obj.pattern,
        'patternProperties': ((obj.patternProperties) === undefined) ? undefined : (Object.entries(obj.patternProperties).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: toJson_JsonSchemaPropsV1Beta1(i[1]) })), {})),
        'properties': ((obj.properties) === undefined) ? undefined : (Object.entries(obj.properties).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: toJson_JsonSchemaPropsV1Beta1(i[1]) })), {})),
        'required': (_e = obj.required) === null || _e === void 0 ? void 0 : _e.map(y => y),
        'title': obj.title,
        'type': obj.type,
        'uniqueItems': obj.uniqueItems,
        'x-kubernetes-embedded-resource': obj.xKubernetesEmbeddedResource,
        'x-kubernetes-int-or-string': obj.xKubernetesIntOrString,
        'x-kubernetes-preserve-unknown-fields': obj.xKubernetesPreserveUnknownFields,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_JsonSchemaPropsV1Beta1 = toJson_JsonSchemaPropsV1Beta1;
/**
 * Converts an object of type 'ServiceReferenceV1Alpha1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ServiceReferenceV1Alpha1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'name': obj.name,
        'namespace': obj.namespace,
        'path': obj.path,
        'port': obj.port,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ServiceReferenceV1Alpha1 = toJson_ServiceReferenceV1Alpha1;
/**
 * Converts an object of type 'MetricIdentifierV2Beta2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_MetricIdentifierV2Beta2(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'name': obj.name,
        'selector': toJson_LabelSelector(obj.selector),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_MetricIdentifierV2Beta2 = toJson_MetricIdentifierV2Beta2;
/**
 * Converts an object of type 'MetricTargetV2Beta2' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_MetricTargetV2Beta2(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'averageUtilization': obj.averageUtilization,
        'averageValue': (_a = obj.averageValue) === null || _a === void 0 ? void 0 : _a.value,
        'type': obj.type,
        'value': (_b = obj.value) === null || _b === void 0 ? void 0 : _b.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_MetricTargetV2Beta2 = toJson_MetricTargetV2Beta2;
/**
 * Converts an object of type 'NodeSelectorTerm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_NodeSelectorTerm(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'matchExpressions': (_a = obj.matchExpressions) === null || _a === void 0 ? void 0 : _a.map(y => toJson_NodeSelectorRequirement(y)),
        'matchFields': (_b = obj.matchFields) === null || _b === void 0 ? void 0 : _b.map(y => toJson_NodeSelectorRequirement(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_NodeSelectorTerm = toJson_NodeSelectorTerm;
/**
 * Converts an object of type 'PreferredSchedulingTerm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PreferredSchedulingTerm(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'preference': toJson_NodeSelectorTerm(obj.preference),
        'weight': obj.weight,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PreferredSchedulingTerm = toJson_PreferredSchedulingTerm;
/**
 * Converts an object of type 'WeightedPodAffinityTerm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_WeightedPodAffinityTerm(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'podAffinityTerm': toJson_PodAffinityTerm(obj.podAffinityTerm),
        'weight': obj.weight,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_WeightedPodAffinityTerm = toJson_WeightedPodAffinityTerm;
/**
 * Converts an object of type 'PodAffinityTerm' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_PodAffinityTerm(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'labelSelector': toJson_LabelSelector(obj.labelSelector),
        'namespaces': (_a = obj.namespaces) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'topologyKey': obj.topologyKey,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_PodAffinityTerm = toJson_PodAffinityTerm;
/**
 * Converts an object of type 'Handler' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_Handler(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'exec': toJson_ExecAction(obj.exec),
        'httpGet': toJson_HttpGetAction(obj.httpGet),
        'tcpSocket': toJson_TcpSocketAction(obj.tcpSocket),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_Handler = toJson_Handler;
/**
 * Converts an object of type 'ExecAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ExecAction(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'command': (_a = obj.command) === null || _a === void 0 ? void 0 : _a.map(y => y),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ExecAction = toJson_ExecAction;
/**
 * Converts an object of type 'HttpGetAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_HttpGetAction(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'host': obj.host,
        'httpHeaders': (_a = obj.httpHeaders) === null || _a === void 0 ? void 0 : _a.map(y => toJson_HttpHeader(y)),
        'path': obj.path,
        'port': (_b = obj.port) === null || _b === void 0 ? void 0 : _b.value,
        'scheme': obj.scheme,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_HttpGetAction = toJson_HttpGetAction;
/**
 * Converts an object of type 'TcpSocketAction' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_TcpSocketAction(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'host': obj.host,
        'port': (_a = obj.port) === null || _a === void 0 ? void 0 : _a.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_TcpSocketAction = toJson_TcpSocketAction;
/**
 * Converts an object of type 'Capabilities' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_Capabilities(obj) {
    var _a, _b;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'add': (_a = obj.add) === null || _a === void 0 ? void 0 : _a.map(y => y),
        'drop': (_b = obj.drop) === null || _b === void 0 ? void 0 : _b.map(y => y),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_Capabilities = toJson_Capabilities;
/**
 * Converts an object of type 'KeyToPath' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_KeyToPath(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'key': obj.key,
        'mode': obj.mode,
        'path': obj.path,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_KeyToPath = toJson_KeyToPath;
/**
 * Converts an object of type 'DownwardApiVolumeFile' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_DownwardApiVolumeFile(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'fieldRef': toJson_ObjectFieldSelector(obj.fieldRef),
        'mode': obj.mode,
        'path': obj.path,
        'resourceFieldRef': toJson_ResourceFieldSelector(obj.resourceFieldRef),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_DownwardApiVolumeFile = toJson_DownwardApiVolumeFile;
/**
 * Converts an object of type 'VolumeProjection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_VolumeProjection(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'configMap': toJson_ConfigMapProjection(obj.configMap),
        'downwardAPI': toJson_DownwardApiProjection(obj.downwardApi),
        'secret': toJson_SecretProjection(obj.secret),
        'serviceAccountToken': toJson_ServiceAccountTokenProjection(obj.serviceAccountToken),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_VolumeProjection = toJson_VolumeProjection;
/**
 * Converts an object of type 'HttpIngressPathV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_HttpIngressPathV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'backend': toJson_IngressBackendV1Beta1(obj.backend),
        'path': obj.path,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_HttpIngressPathV1Beta1 = toJson_HttpIngressPathV1Beta1;
/**
 * Converts an object of type 'IpBlockV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_IpBlockV1Beta1(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'cidr': obj.cidr,
        'except': (_a = obj.except) === null || _a === void 0 ? void 0 : _a.map(y => y),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_IpBlockV1Beta1 = toJson_IpBlockV1Beta1;
/**
 * Converts an object of type 'IpBlock' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_IpBlock(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'cidr': obj.cidr,
        'except': (_a = obj.except) === null || _a === void 0 ? void 0 : _a.map(y => y),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_IpBlock = toJson_IpBlock;
/**
 * Converts an object of type 'ConfigMapKeySelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ConfigMapKeySelector(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'key': obj.key,
        'name': obj.name,
        'optional': obj.optional,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ConfigMapKeySelector = toJson_ConfigMapKeySelector;
/**
 * Converts an object of type 'ObjectFieldSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ObjectFieldSelector(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'apiVersion': obj.apiVersion,
        'fieldPath': obj.fieldPath,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ObjectFieldSelector = toJson_ObjectFieldSelector;
/**
 * Converts an object of type 'ResourceFieldSelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ResourceFieldSelector(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'containerName': obj.containerName,
        'divisor': (_a = obj.divisor) === null || _a === void 0 ? void 0 : _a.value,
        'resource': obj.resource,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ResourceFieldSelector = toJson_ResourceFieldSelector;
/**
 * Converts an object of type 'SecretKeySelector' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_SecretKeySelector(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'key': obj.key,
        'name': obj.name,
        'optional': obj.optional,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_SecretKeySelector = toJson_SecretKeySelector;
/**
 * Converts an object of type 'ExternalDocumentationV1Beta1' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ExternalDocumentationV1Beta1(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'description': obj.description,
        'url': obj.url,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ExternalDocumentationV1Beta1 = toJson_ExternalDocumentationV1Beta1;
/**
 * Converts an object of type 'NodeSelectorRequirement' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_NodeSelectorRequirement(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'key': obj.key,
        'operator': obj.operator,
        'values': (_a = obj.values) === null || _a === void 0 ? void 0 : _a.map(y => y),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_NodeSelectorRequirement = toJson_NodeSelectorRequirement;
/**
 * Converts an object of type 'HttpHeader' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_HttpHeader(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'name': obj.name,
        'value': obj.value,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_HttpHeader = toJson_HttpHeader;
/**
 * Converts an object of type 'ConfigMapProjection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ConfigMapProjection(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KeyToPath(y)),
        'name': obj.name,
        'optional': obj.optional,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ConfigMapProjection = toJson_ConfigMapProjection;
/**
 * Converts an object of type 'DownwardApiProjection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_DownwardApiProjection(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_DownwardApiVolumeFile(y)),
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_DownwardApiProjection = toJson_DownwardApiProjection;
/**
 * Converts an object of type 'SecretProjection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_SecretProjection(obj) {
    var _a;
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'items': (_a = obj.items) === null || _a === void 0 ? void 0 : _a.map(y => toJson_KeyToPath(y)),
        'name': obj.name,
        'optional': obj.optional,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_SecretProjection = toJson_SecretProjection;
/**
 * Converts an object of type 'ServiceAccountTokenProjection' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
function toJson_ServiceAccountTokenProjection(obj) {
    if (obj === undefined) {
        return undefined;
    }
    const result = {
        'audience': obj.audience,
        'expirationSeconds': obj.expirationSeconds,
        'path': obj.path,
    };
    // filter undefined values
    return Object.entries(result).reduce((r, i) => (i[1] === undefined) ? r : (Object.assign(Object.assign({}, r), { [i[0]]: i[1] })), {});
}
exports.toJson_ServiceAccountTokenProjection = toJson_ServiceAccountTokenProjection;
/* eslint-enable max-len, quote-props */
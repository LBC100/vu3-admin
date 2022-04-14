<template>
	<div class=""><customModal ref="customModal01" confrimTextProps="立即查看" @confirm="confirm" /></div>
</template>

<script>
import customModal from '@/components/customModal';
import { getStoreStatus } from '@/api/api.js';
import ls from 'localstorage-slim';

export default {
	components: { customModal },
	props: {},
	mounted() {
		const _this = this;

		_this.$refs.customModal01.title = '账户收款冻结！';
		_this.$refs.customModal01.text = '您的店亲亲店铺佣金已多次扣款失败，现已冻结店铺的收款功能，如需恢复，请及时联系客服解除限制。';

		// ls.set('test01', 'true', { ttl: 5 }); // with optional ttl in seconds

		// setTimeout(() => {
		// 	const result2 = ls.get('test01');
		// 	console.log(result2, "测试5");
		// }, 6000);

		this.getStoreStatusFn();
	},
	data() {
		return {};
	},
	methods: {
		confirm() {
			this.$router.push('/systemSet/comboManage');
			ls.set('comboManageModalCheck', 'true', { ttl: 7200 }); // 2小时不弹窗
			// ls.set('comboManageModalCheck', 'true', { ttl: 20 });
		},
		getStoreStatusFn() {
			const _this = this;
			getStoreStatus()
				.then(res => {
					let bool = ls.get('comboManageModalCheck');

					if (res.data && res.data.storeStatus == 2 && bool != 'true') {
						_this.$refs.customModal01.title = '账户收款冻结！';
						_this.$refs.customModal01.text = '您的店亲亲店铺佣金已多次扣款失败，现已冻结店铺的收款功能，如需恢复，请及时联系客服解除限制。';
						this.$refs.customModal01.show = true;
					}if (res.data && res.data.storeStatus == 3 && bool != 'true') {
						_this.$refs.customModal01.title = '店铺绑卡确认';
						_this.$refs.customModal01.text = '您的店铺暂未绑定信用卡，请先绑定信用卡进行解冻店铺收款功能，如有疑问，请联系客服处理。';
						this.$refs.customModal01.show = true;
					} else if (res.data && res.data.storeStatus == 1) {
						// 正常不弹
						ls.set('comboManageModalCheck', 'false');
					}
				})
				.catch(err => {
					this.$Message.warning(err.msg);
				})
				.finally(() => {});
		}
	}
};
</script>

<style lang="less" scoped></style>

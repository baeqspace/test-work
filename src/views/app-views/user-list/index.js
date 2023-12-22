import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import userData from "assets/data/user-list.data.json";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



export class UserList extends Component {

	state = {
		users: [],
		userProfileVisible: false,
		selectedUser: null,
		loader: false
	}

	async componentDidMount() {
		this.setState({...this.state, loader: true})
		const data = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()
		this.setState({...this.state, users: data})
		this.setState({...this.state, loader: false})
	}

	deleteUser = userId => {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		})
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});
	};
	
	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
    });
	}

	render() {
		const { users, userProfileVisible, selectedUser, loader } = this.state;

		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Username',
				dataIndex: 'username',
				sorter: {
					compare: (a, b) => a.role.length - b.role.length,
				},
			},
			{
				title: 'Phone',
				dataIndex: 'phone',
				sorter: {
					compare: (a, b) => a.status.length - b.status.length,
				}
			},
			{
				title: 'Website',
				dataIndex: 'website',
				sorter: {
					compare: (a, b) => a.status.length - b.status.length,
				},
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Link to={`${APP_PREFIX_PATH}/main/clients/editProfile/${elm.id}`}>
								<Button type="primary" className="mr-2" icon={<EyeOutlined />} size="small"/>
							</Link>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];
		return (
			<Card bodyStyle={{'padding': '0px'}}>
				{loader && <Loading/>}
				<Table columns={tableColumns} dataSource={users} rowKey='id' />
				<UserView data={selectedUser} visible={userProfileVisible} close={()=> {this.closeUserProfile()}}/>
			</Card>
		)
	}
}

export default UserList

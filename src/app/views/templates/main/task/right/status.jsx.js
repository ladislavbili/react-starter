import React from 'react';
import DropDown from '../../../../../forms/Task/DropDown.form';

const status = ({task, action, statuses}) => {
    const options = statuses.filter(statue => statue.is_active).map((status) => {
        return {
            'label': status.title,
            'color': status.color,
            'value': status.id,
            'className': 'uk-badge',
            'selectedClassName': 'md-btn md-btn-wave-light md-btn-block'
        }
    });
    return (
        <div>
            <label className="uk-text-muted" style={{marginLeft: '51px'}}>Status</label>

            <div className="uk-input-group">
                <span className="uk-input-group-addon"><i className="material-icons">&#xE896;</i></span>
                {task.taskHasAssignedUsers.map((record, i) => {
                    return (<DropDown
                            key={i}
                            fieldName="status"
                            options={options}
                            customLabel={record.user.username}
                            action={action}
                            taskId={task.id}
                            defaultValue={record.status.id}
                            additionalInfo={
                                {
                                    'assigned': record.user.id
                                }
                            }
                        />
                    )
                })}
                {task.taskHasAssignedUsers.length === 0 &&
                <DropDown
                    fieldName="status"
                    options={options}
                    action={action}
                    taskId={task.id}
                    defaultValue=""
                />
                }
            </div>
        </div>
    );
};

export default status;
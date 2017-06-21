import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {generateRoute, paths} from '../../../config/router';

const sidebar = ({filter, projects, tags, createTask, params, menuToggleActive, loggedUserAcl}) => {

    const projectId = params.projectId;
    const tagId = params.tagId;
    const reportId = params.reportId;

    //aby boli otvorene menu Projects,Tags,Reports
    const projectsOpen = true;
    const tagsOpen = true;
    const reportsOpen = true;


    let archivedProjects=projects.filter(project=>{if (!project.is_active) return project});
    projects=projects.filter(project=>{if (project.is_active) return project});

    return (
        <aside id="sidebar_main" style={{overflow:'auto'}}>
            <div className="sidebar_main_header">
                <div className="align-logo">
                    <Link to='/' className="uk-text-large"><h1 className="heading_a md-color-white">LAN HELPDESK
                        4.0</h1>
                    </Link>
                </div>
            </div>
            <div className="menu_section">
                {/*<ul>*/}
                    {/*<li>*/}
                        {/*<Link onClick={createTask}>*/}
                            {/*<span className="menu_icon"><i*/}
                                {/*className="material-icons md-color-blue-500">&#xE145;</i></span>*/}
                            {/*<span className="menu_title md-color-blue-500">NEW TASK</span>*/}
                        {/*</Link>*/}
                    {/*</li>*/}
                {/*</ul>*/}
                <ul>
                    <li>
                        <Link to={'/tasks/create'}>
                            <span className="menu_icon"><i
                                className="material-icons md-color-blue-500">&#xE145;</i></span>
                            <span className="menu_title md-color-blue-500">CREATE TASK</span>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/filter'>
                            <span className="menu_icon"><i className="material-icons">&#xE152;</i></span>
                            <span className="menu_title">FILTER</span>
                        </Link>
                    </li>
                </ul>
                <ul>
                    {filter.map((filt, i) => {
                        return (
                            <li key={i} title="FILTER">
                                <Link to={'/dashboard/' + filt.id}>
                                    <span className="menu_icon"><i className="material-icons">&#xE152;</i></span>
                                    <span className="menu_title">{filt.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>


            <div className="menu_section">
                <ul>
                    {/*sidebar menu - projects */}
                    <li className={projectId?"submenu_trigger act_section":'submenu_trigger'}>

                        <a href="#" onClick={menuToggleActive.bind(null)} className={projectsOpen?'active':''}>
                            <span className="menu_icon"><i className="material-icons">&#xE2C8;</i></span>
                            <span className="menu_title">Projects</span>
                        </a>

                        <ul>
                            {projects.map((project, i) => {
                                const link = generateRoute('project_tasks', {projectId: project.id});
                                const linkEdit = generateRoute('project_edit', {projectId: project.id});

                                return <li key={i}>

                                   <span className="submenu-title">
                                     <Link to={link}
                                           className={parseInt(project.id,10)===parseInt(projectId,10)?'active md-color-deep-orange-500':''}>
                                          {project.title}
                                        </Link>
                                     </span>
                                    <span className="submenu-icon">
                                        <Link to={linkEdit}>
                                            <i className="material-icons">&#xE8B8;</i>
                                        </Link>
                                    </span>
                                </li>
                            })}

                            { loggedUserAcl.indexOf('create_projects')!==-1 && <li>
                                <span className="submenu-title">
                                    <Link to={paths.project_add} className="md-color-blue-500">
                                        <i className="material-icons md-color-blue-500">&#xE145;</i>
                                        Project
                                    </Link>
                                </span>
                            </li>
                            }
                        </ul>
                    </li>




                    {/*sidebar menu - archived projects */}
                    <li className={projectId?"submenu_trigger act_section":'submenu_trigger'}>

                        <a href="#" onClick={menuToggleActive.bind(null)} className={projectsOpen?'active':''}>
                            <span className="menu_icon"><i className="material-icons">&#xE2C8;</i></span>
                            <span className="menu_title">Archived projects</span>
                        </a>

                        <ul>
                            {archivedProjects.map((project, i) => {
                                const link = generateRoute('project_tasks', {projectId: project.id});
                                const linkEdit = generateRoute('project_edit', {projectId: project.id});

                                return <li key={i}>

                                   <span className="submenu-title">
                                     <Link to={link}
                                           className={parseInt(project.id,10)===parseInt(projectId,10)?'active md-color-deep-orange-500':''}>
                                          {project.title}
                                        </Link>
                                     </span>
                                    <span className="submenu-icon">
                                        <Link to={linkEdit}>
                                            <i className="material-icons">&#xE8B8;</i>
                                        </Link>
                                    </span>
                                </li>
                            })}

                        </ul>
                    </li>


                    {/*sidebar menu tags */}
                    <li className={tagId?"submenu_trigger act_section":'submenu_trigger'}>
                        <a href="#" onClick={menuToggleActive.bind(null)} className={tagsOpen?'active':''}>
                            <span className="menu_icon"><i className="material-icons">&#xE893;</i></span>
                            <span className="menu_title">Tags</span>
                        </a>

                        <ul >
                            {tags.map((tag, i) => {
                                const link = generateRoute('tag_tasks', {tagId: tag.id});
                                const linkEdit = generateRoute('tag_edit', {tagId: tag.id});

                                return <li key={i}>
                                    <span className="submenu-title">
                                        <Link to={link}
                                              className={parseInt(tag.id,10)===parseInt(tagId,10)?'active  md-color-deep-orange-500':''}>
                                                {tag.title}
                                        </Link>
                                    </span>

                                    <Link className="submenu-icon" to={linkEdit}>
                                        <i className="material-icons">&#xE8B8;</i>
                                    </Link>

                                </li>
                            })}
                            <li>
                                <span className="submenu-title">
                                    <Link to={paths.tag_add} className="md-color-blue-500">
                                        <i className="material-icons md-color-blue-500">&#xE145;</i>
                                        Tag
                                    </Link>
                                </span>

                            </li>
                        </ul>
                    </li>


                    {/*sidebar menu Reports */}
                    { loggedUserAcl.indexOf('report_filters') !== -1 &&
                    <li className={reportId ? "submenu_report act_section" : 'submenu_trigger'}>
                        <a href="#" onClick={menuToggleActive.bind(null)} className={reportsOpen ? 'active' : ''}>
                            <span className="menu_icon"><i className="material-icons">&#xE85C;</i></span>
                            <span className="menu_title">Reports</span>
                        </a>
                        <ul>
                            <li>
                                <span className="submenu-title">
                                    <Link
                                        to='/reports/companies'>
                                        Companies
                                    </Link>
                                 </span>
                            </li>

                            <li>
                                <span className="submenu-title">
                                    <Link to='/reports/users'>
                                    Users
                                    </Link>
                                </span>
                            </li>
                            <li>
                                <span className="submenu-title">
                                         <Link to='/reports/custom'>
                                         Custom
                                         </Link>
                                </span>
                            </li>
                            <li>
                                   <span className="submenu-title">
                                        <Link to='/reports/custom'>
                                            Custom report 1
                                        </Link>
                                   </span>
                            </li>
                            <li>
                                <span className="submenu-title">
                                    <Link to={paths.report_add} className="md-color-blue-500">
                                        <i className="material-icons md-color-blue-500">&#xE145;</i>
                                     Report
                                    </Link>
                                </span>
                            </li>
                        </ul>
                    </li>
                    }

                </ul>
            </div>
        </aside>
    );
};

sidebar.propTypes = {
    filter: PropTypes.array.isRequired
};

export default sidebar;